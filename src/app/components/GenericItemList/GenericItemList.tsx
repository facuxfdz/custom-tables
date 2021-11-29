import type { IdjObj, GenericProps } from "../../../types/Items";
import { Item } from "..";

const GenericItemList = <T extends IdjObj>({
  renderItem,
  data,
}: GenericProps<T>) => {
  return (
    <div className="w-100 text-center my-5">
      {data.map((item) => (
          <Item item={item} renderItem={renderItem}/>
      ))}
    </div>
  );
};

export default GenericItemList;
