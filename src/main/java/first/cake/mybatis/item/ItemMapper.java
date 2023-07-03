package first.cake.mybatis.item;

import first.cake.domain.item.entity.Item;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ItemMapper {

    Long save(Item item);
}
