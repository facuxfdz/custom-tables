import React, { useEffect, useState } from "react";
import { GenericItemList, ItemCount } from "../../app/components";
import { useAppDispatch } from "../../app/hooks";
import { setProduct } from "../../features/products/productsSlice";
import type { IdjObj } from "../../types";

interface Product {
  id : number,
  category : string,
  size : string,
  price : number,
  description : string,
}

const ItemListContainer = () => { // This component act as ItemListContainer
  const [tables, setTables] = useState({} as IdjObj);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchTables = async () => {
      const tables = await fetch("http://localhost:5000/tables");
      const tablesJSON = await tables.json();
      setTables(tablesJSON);
      const productsObj : Product[] = Object.values(tablesJSON)
      productsObj.forEach(product => {
        dispatch(setProduct(product))
      })
    };

    try {
      if (Object.keys(tables).length === 0) {
        fetchTables();
      }
    } catch (error) {
      console.error(error);
    }
  }, [tables, dispatch]);

  const items =
    Object.values(tables).length === 0 ? null : (
      <GenericItemList
        renderItem={(item) => (
            <ItemCount id={item.id} category={item.category} size={item.size} price={item.price} description={item.description}/>
          )
        }
        data={Object.values(tables)} // tables itself is first an empty object but then it turns into an array. That's why y pass it into Object.values()
      />
    );

  return (
    <div className="text-center my-5">
      <h1>Explore our products</h1>
      {items}
    </div>
  );
};

export default ItemListContainer;
