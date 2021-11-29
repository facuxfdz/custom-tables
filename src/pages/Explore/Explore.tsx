import React, { useEffect, useState } from "react";
import { GenericItemList, ItemCount } from "../../app/components";
import type { IdjObj } from "../../types/Items";

const Explore = () => { // This component act as ItemListContainer
  const [tables, setTables] = useState({} as IdjObj);

  useEffect(() => {
    const fetchTables = async () => {
      const tables = await fetch("http://localhost:5000/tables");
      const tablesJSON = await tables.json();
      setTables(tablesJSON);
    };

    try {
      if (Object.keys(tables).length === 0) {
        fetchTables();
      }
    } catch (error) {
      console.error(error);
    }
  }, [tables]);

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

export default Explore;
