package first.cake.controller;


import first.cake.domain.item.dto.ItemDto;
import first.cake.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/item")
    public Long save(ItemDto item){
        return itemService.save(item);
    }
}
