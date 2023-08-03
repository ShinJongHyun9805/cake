package first.cake.controller.user;

import first.cake.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;

@Controller
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/signUpPage")
    public String signUpPage() {
        return "user/signUp";
    }

    @RequestMapping(value = "/signUp", method = RequestMethod.POST)
    public ModelAndView signUp(@RequestParam  HashMap<String,Object> reqVo) {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("user/signUpComplete");
        int result = userService.signUp(reqVo);
        if(result != 1){
            modelAndView.setViewName("redirect:/");
        }
        return modelAndView;
    }

    /**
     * 아이디 중복검사
     */
    @RequestMapping(value = "/join/verifyLoginIdAjax", method = RequestMethod.POST)
    @ResponseBody
    public String loginIdDuplicationCheckAjax(@RequestBody HashMap<String,Object> reqVo) {
        try{
            String loginId = (String) reqVo.get("loginId");
            return userService.checkIdValidate(loginId);
        }catch (Exception e){
            return String.valueOf(e);
        }
    }

    /**
     * 닉네임 중복검사
     */
    @RequestMapping(value = "/join/verifyNickNameAjax", method = RequestMethod.POST)
    @ResponseBody
    public String nickNameDuplicationCheckAjax(@RequestBody HashMap<String,Object> reqVo) {
        try{
            String nickName = (String) reqVo.get("nickName");
            return userService.checkNickNameValidate(nickName);
        }catch (Exception e){
            return String.valueOf(e);
        }
    }
}
