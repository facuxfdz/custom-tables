import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
const Confirm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
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

  const handleSubmitCart = () => {
    const dataOk = [name, email, tel].every((i) => i !== "");
    if (dataOk) {
      // Logic to push to Firebase
      const mappingObj = {buyer: {name,email,tel},items: cart.products,date: new Date(), total: totalPurchase}
      console.log(mappingObj)
      alert("Product Submitted");
    } else {
      // Logic to show an error
      alert("FATAL ERROR");
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
    </div>
  );
};

export default Confirm;
