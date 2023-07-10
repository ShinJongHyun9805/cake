package first.cake.controller;


import first.cake.domain.item.dto.ItemDto;
import first.cake.domain.item.entity.Item;
import first.cake.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    @GetMapping("/item")
    public Long save(ItemDto item){
        return itemService.save(item);
    }

    @GetMapping("/findAll")
    public List<Item> findAll(){
        return itemService.findAll();
    }
}
