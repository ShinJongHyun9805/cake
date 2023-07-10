package first.cake.service;


import first.cake.domain.item.dto.ItemDto;
import first.cake.domain.item.entity.Item;
import first.cake.repository.item.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final ItemRepository itemRepository;

    public Long save(ItemDto dto){
        Item item = Item.builder()
                .itemName(dto.getItemName())
                .price(dto.getPrice())
                .quantity(dto.getQuantity())
                .build();

        return itemRepository.save(item);
    }

    // ITEM 전체 조회
    public List<Item> findAll(){
        return itemRepository.findAll();
    }

}
