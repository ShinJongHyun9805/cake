package first.cake.service.chat;

import com.fasterxml.jackson.databind.ObjectMapper;
import first.cake.domain.item.dto.chat.ChatRoomDto;
import first.cake.repository.chat.Chat;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class ChatService {

    private final Chat chat;

    // 모든 채팅방 조회
    public List<ChatRoomDto> findAllRoom(){
        return chat.findAllRooms();
    }

    // roomId로 채팅방 조회
    public ChatRoomDto findRoomById(String roomId){
        return chat.findRoomById(roomId);
    }

    // roomName 으로 채팅방 생성
    public ChatRoomDto createChatRoom(String name){
        return chat.createChatRoom(name);
    }

    // 채팅방 인원 + 1
    public void plusUserCnt(String roomId) {
        chat.plusUserCnt(roomId);
    }

    // 채팅방 인원 - 1
    public void minusUserCnt(String roomId) {
        chat.minusUserCnt(roomId);
    }

    // 채팅방 유저 리스트에 유저 추가
    public String addUser(String roomId, String userName) {
        return chat.addUser(roomId, userName);
    }

    // 채팅방 유저 리스트 삭제
    public void delUser(String roomId, String userUUID) {
        chat.delUser(roomId, userUUID);
    }

    // 채팅방 userName 조회
    public String getUserName(String roomId, String userUUID) {
        return chat.getUserName(roomId, userUUID);
    }

    // 채팅방 전체 유저 조회
    public ArrayList<String> getUserList(String roomId) {
        return chat.getUserList(roomId);
    }
}
