package first.cake.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * AWS에서 / 경로가 없으면 심각한 에러라고 판단하여 알림을 계속 보냄.
 * */

@RequiredArgsConstructor
@RestController
public class DefaultController {

    @GetMapping("/")
    public String home() {
        return "<h1>Hello Cake</h1>";
    }
}
