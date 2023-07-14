package first.cake.mybatis.chat;

import first.cake.domain.item.dto.chat.ChatRoomDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ChatMapper {
    List<ChatRoomDto> findAllRooms();
}
