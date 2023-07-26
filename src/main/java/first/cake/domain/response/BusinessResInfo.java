package first.cake.domain.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIgnoreProperties
public class BusinessResInfo implements Serializable {

    private String b_no;
    private String valid;
    private String valid_msg;
    private BusinessInfoRequestParam request_param;
    private BusinessStatus status;
}
