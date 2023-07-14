package first.cake.controller.chat;

import first.cake.domain.item.dto.chat.ChatRoomDto;
import first.cake.service.chat.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Slf4j
@Controller
@RequiredArgsConstructor
public class ChattingRoomController {
    
    private final ChatService chatService;

    public static String customerId = "jhshin";

    // 채팅 리스트 화면
    @GetMapping("/chat")
    public String goChatRoom(Model model){
        model.addAttribute("list", chatService.findAllRoom());

        log.info("SHOW ALL ChatList {}", chatService.findAllRoom());

        return "chat/roomList";
    }

    // 채팅방 생성 후 다시 / 로 return
    @PostMapping("/chat/createRoom")
    public String createRoom(@RequestParam("storeName") String storeName, RedirectAttributes rttr) {
        // TODO : 이미 문의한 매장인지 체크


        ChatRoomDto room = chatService.createChatRoom(storeName, customerId);

        log.info("CREATE Chat Room {}", room);

        rttr.addFlashAttribute("roomName", room);
        return "redirect:/chat";
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