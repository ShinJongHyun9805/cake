package first.cake.mybatis.user;

import org.apache.ibatis.annotations.Mapper;

import java.util.HashMap;

@Mapper
public interface UserMapper {
    // 아이디 중복체크
    String checkIdValidate(String loginId);

    // 회원가입(DB INSERT)
    int signUp(HashMap<String,Object> reqVo);
}
