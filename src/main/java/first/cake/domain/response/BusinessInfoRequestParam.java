package first.cake.domain.response;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.io.Serializable;

@Data
@JsonIgnoreProperties
public class BusinessInfoRequestParam implements Serializable {

    private String b_no;
    private String start_dt;
    private String p_nm;
}
