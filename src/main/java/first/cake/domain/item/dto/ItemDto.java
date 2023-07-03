package first.cake.domain.item.dto;

import lombok.Data;

@Data
public class ItemDto {

    private Long id;
    private String itemName;
    private Integer price;
    private Integer quantity;
}
