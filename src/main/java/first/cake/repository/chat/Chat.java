package first.cake.repository.chat;

import first.cake.domain.item.dto.chat.ChatRoomDto;

import java.util.ArrayList;
import java.util.List;

public interface Chat {

    // 전체 채팅방 조회
    List<ChatRoomDto> findAllRooms();

    // roomId로 채팅방 조회
    ChatRoomDto findRoomById(String roomId);

    // roomName 로 채팅방 만들기
    ChatRoomDto createChatRoom(String roomName);

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

}
