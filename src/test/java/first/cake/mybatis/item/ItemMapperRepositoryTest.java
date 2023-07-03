package first.cake.mybatis.item;

import first.cake.domain.item.entity.Item;
import first.cake.repository.item.ItemRepository;
import org.assertj.core.api.Assertions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class ItemMapperRepositoryTest {

    @Autowired
    ItemRepository itemRepository;

    void 상품저장(){
        // given
        Item item = Item.builder()
                .itemName("jhshin")
                .price(1000)
                .quantity(1)
                .build();

        // when
        Long saveId = itemRepository.save(item);

        // then
        Assertions.assertThat(saveId).isNotZero();

    }
}