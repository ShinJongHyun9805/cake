package first.cake.domain.dto.chat;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatDto implements Serializable {

    public enum MessageType {
        ENTER, TALK, LEAVE, HISTORY // 입장, 채팅, 퇴장, 채팅 내역
    }

    private MessageType type;   // 메시지 타입
    private String roomId;      // 방 번호
    private String sender;      // 채팅을 보낸 사람
    private String message;     // 메시지
    private String time;        // 채팅 발송 시간간
}