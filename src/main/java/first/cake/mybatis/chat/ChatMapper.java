package first.cake.mybatis.chat;

import first.cake.domain.item.dto.chat.ChatRoomDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ChatMapper {

    // 전체 채팅방 조회
    List<ChatRoomDto> findAllRooms();

    // roomId가 일치하는 채팅방 입장
    ChatRoomDto findRoomById(String roomId);

    // storeName 로 채팅방 만들기
    void createChatRoom(ChatRoomDto chatRoom);

}
