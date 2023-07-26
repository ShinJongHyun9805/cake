package first.cake.domain.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Data
@JsonIgnoreProperties
public class BusinessResponse implements Serializable {

    private long request_cnt;
    private long valid_cnt;
    private String status_code;
    private List<BusinessResInfo> data;

}
