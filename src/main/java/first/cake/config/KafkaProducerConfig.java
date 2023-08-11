package first.cake.config;

import first.cake.domain.dto.chat.ChatDto;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

/**
 * Producer 설정
 * */

@EnableKafka
@Configuration
@RequiredArgsConstructor
public class KafkaProducerConfig {

    private final Environment environment;

    // 실행 환경
    @Value("${ip.address}")
    private String IP_ADDRESS;

    @Bean
    public ProducerFactory<String, ChatDto> producerFactory(){

        // dev, prod 환경 체크
        String[] activeProfiles = environment.getActiveProfiles();
        if (activeProfiles.length == 0){
            IP_ADDRESS = "localhost";
        }

        // 설정값을 셋팅할 map
        Map<String, Object> config = new HashMap<>();
        config.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, IP_ADDRESS + ":9092"); // 서버 정보 추가
        config.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class); // 키 시리얼라이저 정보 추가
        config.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class); // value 시리얼라이저 정보 추가

        return new DefaultKafkaProducerFactory<>(config);
    }

    // 토픽에 데이터를 전송할 kafkaTemplate
    @Bean
    public KafkaTemplate<String, ChatDto> kafkaTemplate(){
        return new KafkaTemplate<>(producerFactory());
    }
}
