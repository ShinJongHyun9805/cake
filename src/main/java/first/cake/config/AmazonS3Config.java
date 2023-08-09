package first.cake.config;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Slf4j
@Configuration
public class AmazonS3Config {

    @Value("${cloud.aws.s3.region}")
    private String region;

    @Bean
    public AmazonS3 amazonS3() {
        log.info(region);
        return AmazonS3Client.builder()
                .withRegion(region)
                .build();
    }
}
