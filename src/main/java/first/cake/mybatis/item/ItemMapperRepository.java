package first.cake.mybatis.item;


import first.cake.domain.item.entity.Item;
import first.cake.repository.item.ItemRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
@Slf4j
public class ItemMapperRepository implements ItemRepository {

    private final ItemMapper mapper;

    @Override
    public Long save(Item item) {
       return mapper.save(item);
    }

    // ITEM 전체 조회
    @Override
    public List<Item> findAll() {
        return mapper.findAll();
    }

}
