package first.cake.controller.user;

import com.fasterxml.jackson.databind.ObjectMapper;
import first.cake.domain.request.BusinessInfo;
import first.cake.domain.request.Business;
import first.cake.service.user.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Mono;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@SpringBootTest
class BizUserControllerTest {

    @Value("${api.url.validate-biz:not-used}")
    private String validateURL;

    @Value("${service.key.validate-biz:not-used}")
    private String serviceKey;

    @Autowired
    private UserService userService;

    public static String objectToJsonString(Object src) {
        try {
            return new ObjectMapper().writeValueAsString(src);
        } catch (Exception e) {
            return null;
        }
    }

    @Test
    void 사업자정보검증_데이터포맷() {
        BusinessInfo bizInfo = BusinessInfo.builder()
                .b_no("3678100561")
                .start_dt("20160903")
                .p_nm("윤종일")
                .build();

        List<BusinessInfo> list = new ArrayList<>();
        list.add(bizInfo);

        Business business = new Business();
        business.setBusinesses(list);

        System.out.println("objectToJsonString(bizUserDto) = " + objectToJsonString(business));
    }

    @Test
    void 사업자정보_yml에서_데이터_가져오기(){
        String u = validateURL + serviceKey;
        System.out.println("u = " + u);
    }

    @Test
    void 데이터_통신_테스트(){
        // 사업자 정보 Data format
        BusinessInfo businessInfo = BusinessInfo.builder()
                .b_no("3678100561")
                .start_dt("20160903")
                .p_nm("윤종일")
                .build();

        List<BusinessInfo> list = new ArrayList<>();
        list.add(businessInfo);

        Business business = Business.builder()
                .businesses(list)
                .build();

        // 전송 데이터
        String requestBody = objectToJsonString(business);

        String encodedServiceKey = URLEncoder.encode(serviceKey, StandardCharsets.UTF_8);

        // URL
        String url = validateURL + encodedServiceKey;
        System.out.println("url = " + url);

//        String res =  userService.validateBizInfo(requestBody, url);
//        System.out.println("s = " + res);

    }
}