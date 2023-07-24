package first.cake.repository.chat;

import first.cake.domain.dto.chat.ChatDto;
import first.cake.domain.dto.chat.ChatRoomDto;
import first.cake.domain.entity.chat.ChatLog;
import first.cake.mybatis.chat.ChatMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;

@Slf4j
@Repository
@RequiredArgsConstructor
public class ChatRepository implements Chat{

    private final ChatMapper chatMapper;
    private Map<String, ChatRoomDto> chatRooms;

    @PostConstruct // Bean 주입 후 초기화 작업이 필요한 메서드에 사용.
    private void init(){
        chatRooms = new LinkedHashMap<>();
    }

    // 전체 채팅방 조회
    @Override
    public List<ChatRoomDto> findAllRooms(String customerId) {
        return chatMapper.findAllRooms(customerId);
    }

    // 입장 할 채팅 방 찾기
    @Override
    public ChatRoomDto findRoomById(String roomId) {
        return chatMapper.findRoomById(roomId);
    }

    // 최초 문의, 채팅방 만들기
    @Override
    public ChatRoomDto createChatRoom(String storeName, String customerId) {
        ChatRoomDto chatRoom = new ChatRoomDto().create(storeName, customerId);

        chatMapper.createChatRoom(chatRoom);

        return chatRoom;
    }

    // 채팅방 인원 + 1
    @Override
    public void plusUserCnt(String roomId) {
        ChatRoomDto chatRoom = chatMapper.findRoomById(roomId);
        chatRoom.plusUserCnt();
    }

    // 채팅방 인원 - 1
    @Override
    public void minusUserCnt(String roomId) {
        ChatRoomDto chatRoom = chatRooms.get(roomId);
        chatRoom.minusUserCnt();
    }

    // 채팅방 유저 리스트에 유저 추가
    @Override
    public String addUser(String roomId, String userName) {
        ChatRoomDto chatRoom = chatMapper.findRoomById(roomId);
        String userUUID = UUID.randomUUID().toString();

        chatRoom.getUserList().put(userUUID, userName);

        return userUUID;
    }

    // 채팅방 유저 이름 중복 확인
    // TODO : SNS 연동 시 userName 중복 확인 필요
    @Override
    public String isDuplicateName(String roomId, String userName) {
        return null;
    }

    // 채팅방 유저 리스트 삭제
    @Override
    public void delUser(String roomId, String userUUID) {
        ChatRoomDto chatRoom = chatRooms.get(roomId);
        chatRoom.exitUser(userUUID);
    }

    // 채팅방 userName 조회
    @Override
    public String getUserName(String roomId, String userUUID) {
        ChatRoomDto chatRoom = chatRooms.get(roomId);
        return chatRoom.getUserList().get(userUUID);
    }

    // 채팅방 전체 유저 조회
    @Override
    public ArrayList<String> getUserList(String roomId) {
        ArrayList<String> list = new ArrayList<>();

        ChatRoomDto chatRoom = chatMapper.findRoomById(roomId);

        // value 값만 뽑아내서 list 저장
        chatRoom.getUserList().forEach((key, value) -> list.add(value));

        return list;
    }

    @Override
    public Optional<ChatRoomDto> alreadyInquire(String storeName, String customerId) {
        ChatRoomDto chatRoomDto = chatMapper.alreadyInquire(storeName, customerId);

        return Optional.ofNullable(chatRoomDto);
    }

    // 채팅로그 저장
    @Override
    public void insertChatLog(ChatDto chatDto) {
        chatMapper.insertChatLog(chatDto);
    }

    // 채팅로그 가져오기
    @Override
    public List<ChatLog> findChatLog(String roomId) {
        return chatMapper.findChatLog(roomId);
    }
}
