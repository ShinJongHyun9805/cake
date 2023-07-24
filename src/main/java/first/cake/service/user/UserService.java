package first.cake.service.user;

import first.cake.repository.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserService {

    private final User user;

    public String checkIdValidate(String loginId) {
        return user.checkIdValidate(loginId);
    }

    public int signUp(HashMap<String,Object> reqVo) {
        return user.signUp(reqVo);
    }

}
