package first.cake.repository.chat;

import first.cake.domain.dto.chat.ChatDto;
import first.cake.domain.dto.chat.ChatRoomDto;
import first.cake.domain.entity.chat.ChatLog;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

public interface Chat {

    // 전체 채팅방 조회
    List<ChatRoomDto> findAllRooms(String customerId);

    // 입장 할 채팅 방 찾기
    ChatRoomDto findRoomById(String roomId);

    // 최초 문의, 채팅방 만들기
    ChatRoomDto createChatRoom(String storeName, String customerId);

    // 채팅방 인원 + 1
    void plusUserCnt(String roomId);

    // 채팅방 인원 - 1
    void minusUserCnt(String roomId);

    // 채팅방 유저 리스트에 유저 추가
    String addUser(String roomId, String userName);

    // 채팅방 유저 이름 중복 확인
    String isDuplicateName(String roomId, String userName);

    // 채팅방 유저 리스트 삭제
    void delUser(String roomId, String userUUID);

    // 채팅방 userName 조회
    String getUserName(String roomId, String userUUID);

    // 채팅방 전체 userList 조회
    ArrayList<String> getUserList(String roomId);

    // 이미 문의한 매장인지
    Optional<ChatRoomDto> alreadyInquire(String storeName, String customerId);

    // 채팅 로그 저장
    void insertChatLog(ChatDto chatDto);

    // 채팅 로그 가져오기
    List<ChatLog> findChatLog(String roomId);

}
