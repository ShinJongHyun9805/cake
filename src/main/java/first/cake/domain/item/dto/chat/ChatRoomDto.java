package first.cake.domain.item.dto.chat;

import lombok.Data;

import java.util.HashMap;
import java.util.UUID;

@Data
public class ChatRoomDto {

    private String roomId;      // 채팅방 아이디
    private String storeName;   // 채팅방 이름
    private String customerId;  // 고객 ID
    private long userCount;     // 채팅방 인원수

    private HashMap<String, String> userList = new HashMap<String, String>();

    public ChatRoomDto create(String storeName, String customerId){
        ChatRoomDto chatRoom = new ChatRoomDto();
        chatRoom.roomId = UUID.randomUUID().toString();
        chatRoom.storeName = storeName;
        chatRoom.customerId = customerId;

        return chatRoom;
    }

    // 채팅방 인원 + 1
    public void plusUserCnt(){
        this.userCount += 1;
    }

    // 채팅방 인원 - 1
    public void minusUserCnt(){
        this.userCount -= 1;
    }
    
    // 채팅방 유저 퇴장
    public void exitUser(String userUUID){
        this.userList.remove(userUUID);
    }
}
