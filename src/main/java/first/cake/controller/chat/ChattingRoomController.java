package first.cake.controller.chat;

import first.cake.domain.item.dto.chat.ChatRoomDto;
import first.cake.service.chat.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.sql.SQLException;

@Slf4j
@Controller
@RequiredArgsConstructor
public class ChattingRoomController {
    
    private final ChatService chatService;

    public static String customerId = "jhshin";

    // 채팅 리스트
    @GetMapping("/chat")
    public String goChatRoom(Model model){
        String customerId = "jhshin";

        model.addAttribute("list", chatService.findAllRoom(customerId));

        log.info("SHOW ALL ChatList {}", chatService.findAllRoom(customerId));

        return "chat/roomList";
    }

    // 문의하기 -> 최초 문의 OR 기존 채팅 방
    @PostMapping("/chat/inquireOrCreateRoom")
    public ResponseEntity<ChatRoomDto> inquireOrCreateRoom(@RequestParam("storeName") String storeName, Model model) {

        try {
            ChatRoomDto res = chatService.inquireOrCreateChatRoom(storeName, customerId);
            log.info("Chat Room {}", res);

            return ResponseEntity.ok(res);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // 채팅방 입장 화면
    // 파라미터로 넘어오는 roomId 를 확인후 해당 roomId 를 기준으로 채팅방을 찾아서 클라이언트를 chatroom 으로 보낸다.
    @GetMapping("/chat/room")
    public String roomDetail(Model model, String roomId){
        log.info("roomId {}", roomId);

        model.addAttribute("room", chatService.findRoomById(roomId));
        return "chat/chatRoom";
    }

}
