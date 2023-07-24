package first.cake.domain.entity.chat;

import com.fasterxml.jackson.databind.ObjectMapper;
import first.cake.domain.dto.chat.ChatDto;
import org.apache.kafka.common.serialization.Deserializer;

public class ChatDtoDeserializer implements Deserializer<ChatDto> {

    @Override
    public ChatDto deserialize(String topic, byte[] data) {
        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(data, ChatDto.class);
        } catch (Exception e) {
            e.printStackTrace();
            // Handle deserialization errors here, e.g., return null or throw an exception.
            return null;
        }
    }
}
