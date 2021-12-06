import React from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addItem } from "../../features/cart/cartSlice";

const ItemDetailContainer = () => {
  const { productId } = useParams() as { productId: string };
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products.products);

  const productToRender = products.filter(
    (product) => product.id === parseInt(productId)
  )[0];
  const { id, category, size, price, description } = productToRender;
  const handleAdd = () => {
    dispatch(addItem({ id, category, size, price, description, amount: 1 }));
  };
  return (
    <div className="d-flex justify-content-center my-5">
      <Card className="my-5" style={{ width: "30rem" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{productToRender.description}</Card.Title>
          <Card.Text>$ {productToRender.price}</Card.Text>

          <Button onClick={handleAdd} variant="success">
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetailContainer;
