import React from "react";
import { Alert, Button, Card, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

interface Item {
  id: number;
  category: string;
  size: string;
  price: number;
  description: string;
}

const ItemCount = ({ id, category, size, price, description }: Item) => {

  let alertClass;
  if (size === "small") alertClass = "info";
  else if (size === "standard") alertClass = "warning";
  else alertClass = "success";


  return (
    <Card style={{ width: "30rem" }}>
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title>{category}</Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Size: <Alert variant={`${alertClass}`}>{size}</Alert>
          </ListGroup.Item>
        </ListGroup>

        <Button className="nav-item" variant="secondary">
          <Link to={`/products/${id}`} className="nav-link text-light">
            View detail
          </Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ItemCount;
