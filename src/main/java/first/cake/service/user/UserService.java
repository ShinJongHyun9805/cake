package first.cake.service.user;

import first.cake.repository.user.User;
import io.swagger.v3.core.util.Json;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

import java.util.HashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final User user;

    public String checkIdValidate(String loginId) {
        return user.checkIdValidate(loginId);
    }

    public int signUp(HashMap<String, Object> reqVo) {
        return user.signUp(reqVo);
    }


    // 사업자 정보 검증
    public String validateBizInfo(String requestBody, String url) {
        // 헤더
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        WebClient webClient = WebClient.create();
        Mono<String> responseMono = webClient.mutate().build()
                .method(HttpMethod.POST)
                .uri(url)
                .headers(httpHeaders -> {
                    httpHeaders.addAll(headers);
                })
                .bodyValue(requestBody)
                .retrieve()
                .onStatus(HttpStatus::is4xxClientError, response -> { // 400 error
                    return response.bodyToMono(String.class) //
                            .defaultIfEmpty(String.format("{\"statusCode\":\"%s\",\"statusMessage\":\"%s\"}", //
                                    response.statusCode().value(), response.statusCode().getReasonPhrase())) // null body
                            .flatMap(body -> { //
                                return Mono.error(new RuntimeException(String.format("%s", body)));    // body exist
                            });
                }).onStatus(HttpStatus::is5xxServerError, response -> { // 500 error
                    return response.bodyToMono(String.class) //
                            .defaultIfEmpty(String.format("{\"statusCode\":\"%s\",\"statusMessage\":\"%s\"}", //
                                    response.statusCode().value(), response.statusCode().getReasonPhrase())) // null body
                            .flatMap(body -> { //
                                return Mono.error(new RuntimeException(String.format("%s", body)));    // body exist
                            });
                })
                .bodyToMono(String.class);
                //.defaultIfEmpty("{\"statusCode\":\"200\"}");

        return responseMono.block();
    }

}
