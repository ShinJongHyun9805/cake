package first.cake.mybatis.item;

import first.cake.domain.item.entity.Item;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ItemMapper {

    Long save(Item item);

    // Item 전체 조회
    List<Item> findAll();
}
