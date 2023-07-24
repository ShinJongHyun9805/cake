package first.cake.controller.user;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;

@Controller
public class UserController {
    @GetMapping("/signUpPage")
    public String signUpPage() {
        return "user/signUp";
    }
    @PostMapping("/signUp")
    public String signUp() {
        return "user/signUp";
    }

    /**
     * 아이디 중복검사(탈퇴회원 포함)
     */
    @RequestMapping(value = "/join/verifyLoginIdAjax", method = RequestMethod.POST)
    @ResponseBody
    public String loginIdDuplicationCheckAjax(@RequestBody HashMap<String,Object> reqVo) {

        return "Y";
    }
}
