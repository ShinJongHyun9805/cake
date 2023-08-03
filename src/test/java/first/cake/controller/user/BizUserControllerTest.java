package first.cake.controller.user;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import first.cake.domain.request.BusinessReqInfo;
import first.cake.domain.request.BusinessRequest;
import first.cake.domain.response.BusinessResInfo;
import first.cake.domain.response.BusinessResponse;
import first.cake.service.user.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;

import java.net.URI;
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
        BusinessReqInfo bizInfo = BusinessReqInfo.builder()
                .b_no("3678100561")
                .start_dt("20160903")
                .p_nm("윤종일")
                .build();

        List<BusinessReqInfo> list = new ArrayList<>();
        list.add(bizInfo);

        BusinessRequest business = new BusinessRequest();
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
        BusinessReqInfo businessInfo = BusinessReqInfo.builder()
                .b_no("3678100561")
                .start_dt("201609310")
                .p_nm("윤종일")
                .build();

        List<BusinessReqInfo> list = new ArrayList<>();
        list.add(businessInfo);

        BusinessRequest business = BusinessRequest.builder()
                .businesses(list)
                .build();

        // 전송 데이터
        String requestBody = objectToJsonString(business);

        // URL
        // TODO : URL은 string으로 하는게 아니라 Uri로 감싸야함. 아니면 또 인코딩 되는 듯
        //String url = validateURL + serviceKey;
        URI url = URI.create(validateURL + serviceKey);

        BusinessResponse res = new BusinessResponse();
        try {
            String response = userService.validateBizInfo(requestBody, url);
            res = new ObjectMapper().readValue(response, new TypeReference<BusinessResponse>() {});
        } catch (RuntimeException e){
            System.out.println("runtime e.getMessage() = " + e.getMessage());
        } catch (Exception e){
            System.out.println("exception e.getMessage() = " + e.getMessage());
        }

        BusinessResInfo businessResInfo = res.getData().get(0);

    }
}