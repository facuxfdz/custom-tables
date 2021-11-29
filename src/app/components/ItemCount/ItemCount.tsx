import React from "react";
import { Alert, Button, Card, ListGroup } from "react-bootstrap";
import { useCartContext } from "../../hooks";

interface Item {
  id: number;
  category: string;
  size: string;
  price: number;
  description: string;
}

const ItemCount = ({id,category,size,price,description} : Item) => {

  let alertClass;
  if (size === "small") alertClass = "info";
  else if (size === "standard") alertClass = "warning";
  else alertClass = "success";

  const handleAdd = () => {
    incrementAmount(1);
  };

  const handleRemove = () => {
    decrementAmount(1);
  };

  const { incrementAmount, decrementAmount } = useCartContext();

  return (
    <Card style={{ width: "30rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Size: <Alert variant={`${alertClass}`}>{size}</Alert>
          </ListGroup.Item>
        </ListGroup>
        <Button className="mx-3" onClick={handleAdd} variant="success">
          Add to cart
        </Button>

        <Button onClick={handleRemove} variant="danger">
          Remove from cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCount;
