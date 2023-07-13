package first.cake.handler;

import com.fasterxml.jackson.databind.ObjectMapper;
import first.cake.domain.item.dto.chat.ChatDto;
import first.cake.domain.item.dto.chat.ChatRoomDto;
import first.cake.service.chat.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Slf4j
@Component
@RequiredArgsConstructor
public class WebSocketChatHandler extends TextWebSocketHandler {

    private final ObjectMapper objectMapper;
    private final ChatService chatService;

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String payload = message.getPayload();
        log.info("payload {}", payload);


        // 웹 소켓 클라이언트로부터 채팅 메세지를 전달받아 채팅 메세지 객체 변환
        ChatDto chatMessage = objectMapper.readValue(payload, ChatDto.class);
        log.info("session {}", chatMessage.toString());

        // 전달받은 메세지 ID로 채팅방 정보 조회
//        ChatRoomDto room = chatService.findRoomById(chatMessage.getRoomId());
//        log.info("room {}", room.toString());

        // 해당 채팅방에 입장해 있는 모든 클라이언트에게 타입에 따른 메세지 발송
        //room.handleAction(session, chatMessage, chatService);
    }

}
