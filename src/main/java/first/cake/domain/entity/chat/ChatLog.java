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
    private String s3DataUrl;   // 파일 업로드 url
    private String fileName;    // 파일이름
    private String fileDir;     // s3 파일 경로
}
