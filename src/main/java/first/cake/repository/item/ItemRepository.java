package first.cake.repository.item;

import first.cake.domain.item.entity.Item;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemRepository {

    Long save(Item item);

    List<Item> findAll();
}
