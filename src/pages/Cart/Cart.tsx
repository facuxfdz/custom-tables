import React from "react";
import { useAppSelector } from "../../app/hooks";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <div className="my-5">
      {cart.products.map((cartItem) => (
        <>
          <p>DESCRIPTION : {cartItem.description}</p>
          <p>PRICE : {cartItem.price}</p>
          <p>AMOUNT : {cartItem.amount}</p>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Cart;
