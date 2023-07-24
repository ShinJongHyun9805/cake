package first.cake.handler;

public class WebSocketChatHandler {
//     extends TextWebSocketHandler
//    private final ObjectMapper objectMapper;
//    private final ChatService chatService;
//    //private final KafkaTemplate<String, ChatDto> kafkaTemplate;
//
//    @Override
//    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
//        String payload = message.getPayload();
//        log.info("payload {}", payload);
//
//
//        // 웹 소켓 클라이언트로부터 채팅 메세지를 전달받아 채팅 메세지 객체 변환
//        ChatDto chatMessage = objectMapper.readValue(payload, ChatDto.class);
//        log.info("session {}", chatMessage.toString());
//
////        // Publish the chat message to Kafka
////        kafkaTemplate.send("chat_topic", chatMessage);
//
//        // 전달받은 메세지 ID로 채팅방 정보 조회
//        ChatRoomDto room = chatService.findRoomById(chatMessage.getRoomId());
//        log.info("room {}", room.toString());
//
//    }
}
