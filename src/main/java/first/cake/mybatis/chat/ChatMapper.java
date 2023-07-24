package first.cake.mybatis.chat;

import first.cake.domain.dto.chat.ChatDto;
import first.cake.domain.dto.chat.ChatRoomDto;
import first.cake.domain.entity.chat.ChatLog;
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

    // 채팅내용 저장
    void insertChatLog(ChatDto chatDto);

    // 채팅로그 가져오기
    List<ChatLog> findChatLog(String roomId);

}
