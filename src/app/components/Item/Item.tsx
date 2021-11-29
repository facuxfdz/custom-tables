import React from "react";
import { IdjObj, ItemProps } from "../../../types";



const Item = <T extends IdjObj>({ item, renderItem }: ItemProps<T>) => {
  return (
    <div
      className="d-flex text-center justify-content-center my-5"
      key={item.id}
    >
      {renderItem(item)}
    </div>
  );
};

export default Item;
