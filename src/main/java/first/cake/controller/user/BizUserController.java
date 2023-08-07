package first.cake.controller.user;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import first.cake.common.Constant;
import first.cake.domain.dto.user.BizUserDto;
import first.cake.domain.request.BusinessRequest;
import first.cake.domain.request.BusinessReqInfo;
import first.cake.domain.response.BusinessResInfo;
import first.cake.domain.response.BusinessResponse;
import first.cake.service.user.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@Slf4j
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
    @ResponseBody
    public ResponseEntity<BusinessResInfo> validateBizInfo(@RequestBody BizUserDto bizUser) {
        // 사업자 정보 Data format
        BusinessReqInfo businessInfo = BusinessReqInfo.builder()
                .b_no(bizUser.getBizNo())
                .p_nm(bizUser.getCeoName())
                .start_dt(bizUser.getReportDate())
                .build();

        List<BusinessReqInfo> list = new ArrayList<>();
        list.add(businessInfo);

        BusinessRequest business = BusinessRequest.builder()
                .businesses(list)
                .build();

        // 전송 데이터
        String requestBody = null;
        try {
            requestBody = objectToJsonString(business);
        } catch (JsonProcessingException e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

        // URL
        // TODO : URL은 string으로 하는게 아니라 Uri로 감싸야함. 아니면 또 인코딩 되는 듯
        //String url = validateURL + serviceKey;
        URI url = URI.create(validateURL + serviceKey);

        BusinessResponse res = new BusinessResponse();
        try {
            String response = userService.validateBizInfo(requestBody, url);
            res = new ObjectMapper().readValue(response, new TypeReference<BusinessResponse>() {});
        } catch (RuntimeException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

        BusinessResInfo businessResInfo = res.getData().get(0);
        return ResponseEntity.ok(businessResInfo);
    }


    public static String objectToJsonString(Object src) throws JsonProcessingException {
        return new ObjectMapper().writeValueAsString(src);
    }
}
