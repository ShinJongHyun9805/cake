package first.cake.controller.chat;

import first.cake.domain.item.dto.chat.ChatRoomDto;
import first.cake.service.chat.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/chat")
public class ChatController {
    
    private final ChatService chatService;
    
    // 채팅방 생성
    @PostMapping
    public ChatRoomDto createRoom(@RequestParam String name){
        return  chatService.createRoom(name);
    }
    
    // 채팅방 전체 조회
    @GetMapping
    public List<ChatRoomDto> findAllRooms(){
        return chatService.findAllRoom();
    } 
    
}
