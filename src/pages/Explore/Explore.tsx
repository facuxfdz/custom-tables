import React, { useEffect, useState } from "react";
import { Alert, Button, Card, ListGroup } from "react-bootstrap";
import { ItemListContainer } from "../../app/components";
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

  const c =
    Object.values(tables).length === 0 ? null : (
      <ItemListContainer
        renderItem={(item) => {
          let alertClass;
          if (item.size === "small") alertClass = "info";
          else if (item.size === "standard") alertClass = "warning";
          else alertClass = "success";

          return (
            <Card style={{ width: "30rem" }}>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>{item.category}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Size: <Alert variant={`${alertClass}`}>{item.size}</Alert>
                  </ListGroup.Item>
                </ListGroup>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        }}
        data={Object.values(tables)}
      />
    );

  return (
    <div className="text-center my-5">
      <h1>Explore our products</h1>
      {c}
    </div>
  );
};

export default Explore;
