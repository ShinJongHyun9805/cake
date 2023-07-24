package first.cake.repository.user;

import first.cake.domain.dto.chat.ChatDto;
import first.cake.domain.dto.chat.ChatRoomDto;
import first.cake.domain.entity.chat.ChatLog;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

public interface User {

    // 아이디 중복체크
    String checkIdValidate(String loginId);

    // 회원가입(DB INSERT)
    int signUp(HashMap<String,Object> reqVo);

}
