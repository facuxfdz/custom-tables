import React, { useEffect, useState } from "react";
import { ItemListContainer } from "../../app/components";
import ItemCount from "../../app/components/ItemCount/ItemCount";
import { IdjObj } from "../../app/components/ItemListContainer/ItemListContainer";


const Explore = () => {
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
      <ItemListContainer
        renderItem={(item) => (
            <ItemCount id={item.id} category={item.category} size={item.size} price={item.price} description={item.description}/>
          )
        }
        data={Object.values(tables)}
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
