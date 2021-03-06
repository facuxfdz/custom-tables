import type { IdjObj, GenericProps } from "../../../types";
import { Item } from "..";

const GenericItemList = <T extends IdjObj>({
  renderItem,
  data,
}: GenericProps<T>) => {
  return (
    <div className="w-100 text-center my-5">
      {data.map((item) => (
          <Item key={item.id} item={item} renderItem={renderItem}/>
      ))}
    </div>
  );
};

export default GenericItemList;
