package first.cake.service.chat;

import com.fasterxml.jackson.databind.ObjectMapper;
import first.cake.domain.item.dto.chat.ChatRoomDto;
import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.*;

@Slf4j
@Service
@Data
public class ChatService {

    private final ObjectMapper mapper;
    private Map<String, ChatRoomDto> chatRooms;

    @PostConstruct
    private void init(){
        chatRooms = new LinkedHashMap<>();
    }

    // 모든 채팅방 찾기
    public List<ChatRoomDto> findAllRoom(){
        return new ArrayList<>(chatRooms.values());
    }

    // Id로 채팅방 찾기
    public ChatRoomDto findRoomById(String roomId){
        return chatRooms.get(roomId);
    }

    // 채팅방 생성
    public ChatRoomDto createRoom(String name){
        String roomId = UUID.randomUUID().toString();   // 랜덤 방 ID 생성

        ChatRoomDto room = ChatRoomDto.builder()
                .roomId(roomId)
                .name(name)
                .build();

        chatRooms.put(roomId, room);

        return room;
    }

    // 지정된 세션에 메세지 발송
    public <T> void sendMessage(WebSocketSession session, T message) {
        try{
            session.sendMessage(new TextMessage(mapper.writeValueAsString(message)));
        } catch (IOException e) {
            log.error(e.getMessage(), e);
        }
    }
}
