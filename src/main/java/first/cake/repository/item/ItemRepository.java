package first.cake.repository.item;

import first.cake.domain.item.entity.Item;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemRepository {

    Long save(Item item);

    void update(Item item);
}
