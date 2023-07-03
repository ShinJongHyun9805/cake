package first.cake.domain.item.entity;

import lombok.Builder;
import lombok.Data;

@Data
public class Item {

    private Long id;
    private String itemName;
    private Integer price;
    private Integer quantity;

    @Builder
    public Item(Long id, String itemName, int price, int quantity){
        this.id = id;
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }
}
