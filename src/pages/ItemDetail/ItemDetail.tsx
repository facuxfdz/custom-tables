import React, { useState } from "react";
import { Badge, Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ItemCount } from "../../app/components";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addItem } from "../../features/cart/cartSlice";
import { updateStock } from "../../features/products/productsSlice";

const ItemDetail = () => {
  const { productId } = useParams() as { productId: string };
  const dispatch = useAppDispatch();

  const [counter, setCounter] = useState(1);
  const products = useAppSelector((state) => state.products.products);
  const navigate = useNavigate();

  const productToRender = products.filter(
    (product) => product.id === productId
  )[0];
  const { id, category, size, price, description, stock } = productToRender;
  const handleAdd = () => {
    dispatch(
      addItem({ id, category, size, price, description, amount: counter })
    );
    dispatch(
      updateStock({ id, category, size, price, description, amount: -counter })
    );
    alert('Product added to cart!')
    navigate(-1)
  };


  const handleIncrement = () => {
    setCounter((prev) => (prev + 1 <= stock ? prev + 1 : prev));
  };
  const handleDecrement = () => {
    setCounter((prev) => (prev - 1 > 1 ? prev - 1 : 1));
  };

  const handleBack = () => {
    navigate("/explore");
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-5">
      <Card className="my-5" style={{ width: "30rem" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150" />
        <Card.Body>
          <Card.Title>{productToRender.description}</Card.Title>
          <Card.Text>$ {productToRender.price}</Card.Text>
          {stock > 0 ? (
            <>
              <ItemCount
                counter={counter}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
              <Button onClick={handleAdd} variant="success">
                Add to cart
              </Button>
            </>
          ) : (
            <Badge bg="secondary">OUT OF STOCK</Badge>
          )}
        </Card.Body>
      </Card>
      <Button variant="warning" onClick={handleBack}>
        Continue Shopping
      </Button>
    </div>
  );
};

export default ItemDetail;
