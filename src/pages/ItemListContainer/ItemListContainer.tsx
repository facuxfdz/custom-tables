import React, { useEffect, useState } from "react";
import { GenericItemList, ItemDetailContainer } from "../../app/components";
import { useAppDispatch } from "../../app/hooks";
import { setProduct } from "../../features/products/productsSlice";
import {collection, getDocs} from 'firebase/firestore/lite'
import {db} from '../../firebase/config'

interface Product {
  id : string,
  category : string,
  size : string,
  price : number,
  description : string,
  stock : number
}

const ItemListContainer = () => { // This component act as ItemListContainer
  const [tables, setTables] = useState<Product[]>([]);
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchTables = async () => {
      const productsRef = collection(db,'products')
      const docs = await getDocs(productsRef)
      const products : Product[] = []
      docs.forEach(doc => {
        const prod = doc.data() as Product
        prod.id = doc.id
        products.push(prod)
      })
      setTables(products)

    };

    try {
      if (Object.keys(tables).length === 0) {
        fetchTables();
      }else{
        tables.forEach(product => {
          dispatch(setProduct(product))
        })
      }
    } catch (error) {
      console.error(error);
    }
  }, [tables, dispatch]);



  const items =
    Object.values(tables).length === 0 ? null : (
      <GenericItemList
        renderItem={(item) => (
            <ItemDetailContainer id={item.id} category={item.category} size={item.size} price={item.price} description={item.description}/>
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
