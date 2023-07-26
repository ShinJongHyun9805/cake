package first.cake.controller.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import first.cake.domain.dto.user.BizUserDto;
import first.cake.domain.request.Business;
import first.cake.domain.request.BusinessInfo;
import first.cake.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class BizUserController {

    @Value("${api.url.validate-biz:not-used}")
    private String validateURL;

    @Value("${service.key.validate-biz:not-used}")
    private String serviceKey;

    private final UserService userService;

    // 사장님 회원가입 페이지
    @GetMapping("/signUpBizPage")
    public String signUpBizPage() {
        return "user/signUpBiz";
    }

    // 사업자 정보 검증
    @PostMapping("/bizUser/validateBizInfo")
    public String validateBizInfo(@RequestBody BizUserDto bizUser) {
        // 사업자 정보 Data format
        BusinessInfo businessInfo = BusinessInfo.builder()
                .b_no(bizUser.getBizNo())
                .p_nm(bizUser.getCeoName())
                .start_dt(bizUser.getReportDate())
                .build();

        List<BusinessInfo> list = new ArrayList<>();
        list.add(businessInfo);

        Business business = Business.builder()
                .businesses(list)
                .build();

        // 전송 데이터
        String requestBody = objectToJsonString(business);

        String url = validateURL + serviceKey;
        String encodedServiceKey = null;

        try {
            encodedServiceKey = URLEncoder.encode(url, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        // URL
//        String url = validateURL + encodedServiceKey;


//        System.out.println("url = " + url);
        //String s = userService.validateBizInfo(requestBody, encodedServiceKey);

       // System.out.println("***************************************s = " + s);

        return null;
    }


    public static String objectToJsonString(Object src) {
        try {
            return new ObjectMapper().writeValueAsString(src);
        } catch (Exception e) {
            return null;
        }
    }

}
