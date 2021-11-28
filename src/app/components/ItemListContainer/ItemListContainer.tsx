import type { ItemProps } from "../../../types/Items";

export interface IdjObj {
  id: string | number
}
const ItemListContainer = <T extends IdjObj>({
  renderItem,
  data,
}: ItemProps<T>) => {
  return (
    <div className="w-100 text-center my-5">
      {data.map((item) => (
          <div className="d-flex text-center justify-content-center my-5" key={item.id}>
              {renderItem(item)}
          </div>
      ))}
    </div>
  );
};

export default ItemListContainer;
