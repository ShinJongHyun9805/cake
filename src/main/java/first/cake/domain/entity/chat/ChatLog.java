package first.cake.domain.entity.chat;

import lombok.Data;

import java.io.Serializable;

@Data
public class ChatLog implements Serializable {

    private String type;
    private String roomId;
    private String storeName;
    private String Sender;
    private String Message;
    private String time;
}
