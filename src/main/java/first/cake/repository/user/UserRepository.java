package first.cake.repository.user;

import first.cake.mybatis.user.UserMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.HashMap;

@Slf4j
@Repository
@RequiredArgsConstructor
public class UserRepository implements User {

    private final UserMapper userMapper;
    @Override
    public String checkIdValidate(String loginId) {
        return userMapper.checkIdValidate(loginId);
    }

    @Override
    public int signUp(HashMap<String, Object> reqVo) {
        return userMapper.signUp(reqVo);
    }
}
