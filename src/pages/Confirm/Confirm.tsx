import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Timestamp, collection, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase/config";
import { emptyCart } from "../../features/cart/cartSlice";

const Confirm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [orderId, setOrderId] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const cart = useAppSelector((state) => state.cart);
  const totalPurchase =
    cart.products.length > 0
      ? cart.products
          .map((product) => product.price * (product?.amount || 1))
          .reduce((acum, curr) => acum + curr)
      : 0;

  const handleCancelOperation = () => {
    navigate(-1);
  };

  const handleCloseModal = () => {
    navigate("/explore")
  }


  const handleSubmitCart = () => {
    const dataOk = [name, email, tel].every((i) => i !== "");
    if (dataOk) {
      // Logic to push to Firebase
      const order = {
        buyer: { name, email, tel },
        items: cart.products,
        date: Timestamp.fromDate(new Date()),
        total: totalPurchase,
      };
      const orders = collection(db, "orders");
      addDoc(orders, order).then((res) => {
        setOrderId(res.id);
        dispatch(emptyCart());
      });
      setName("")
      setEmail("")
      setTel("")
    } else {
      // Logic to show an error
      alert("All fields are required");
    }
  };
  return (
    <div className="my-5 d-flex flex-column align-items-center w-100">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          value={name}
          type="text"
          className="form-control"
          id="name"
          placeholder="Name example"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setName(e.currentTarget.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          value={email}
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setEmail(e.currentTarget.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tel" className="form-label">
          Tel
        </label>
        <input
          value={tel}
          type="text"
          className="form-control"
          id="tel"
          placeholder="+99 999999"
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setTel(e.currentTarget.value);
          }}
        />
      </div>

      <div className="d-flex w-25 justify-content-around">
        <Button variant="success" onClick={handleSubmitCart}>
          Buy
        </Button>

        <Button variant="danger" onClick={handleCancelOperation}>
          Cancel
        </Button>
      </div>
      <Modal show={orderId} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title>Your order was successfully registered!</Modal.Title>
        </Modal.Header>
        <Modal.Body>The order id is <b>{orderId}</b></Modal.Body>
        <Modal.Footer className="d-flex flex-column">
          <Button variant="warning" onClick={handleCloseModal}>Back to home</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Confirm;
