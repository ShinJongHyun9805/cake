package first.cake.mybatis.chat;

import first.cake.domain.item.dto.chat.ChatRoomDto;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ChatMapper {

    // 전체 채팅방 조회
    List<ChatRoomDto> findAllRooms(String customerId);

    // 입장 할 채팅 방 찾기
    ChatRoomDto findRoomById(String roomId);

    // 최초 문의, 채팅방 만들기
    void createChatRoom(ChatRoomDto chatRoom);

    // 이미 문의한 매장인지
    ChatRoomDto alreadyInquire(@Param("storeName") String storeName, @Param("customerId") String customerId);

}
