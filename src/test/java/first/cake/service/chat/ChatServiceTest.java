package first.cake.service.chat;

import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest
@ExtendWith(SpringExtension.class)
class ChatServiceTest {

    @Autowired
    private ChatService chatService;

//    @Test
//    void 채팅방_생성확인() {
//        // given
//        String name = "Shin Jonghyun";
//
//        // when
//        ChatRoomDto room = chatService.createRoom(name);
//
//        // then
//        Assertions.assertNotNull(room);
//        System.out.println("room.getRoomId() = " + room.getRoomId());
//    }
}