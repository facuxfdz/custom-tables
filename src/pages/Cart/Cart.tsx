import React from "react";
import { Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { BsFillTrashFill } from "react-icons/bs";
import { CartProduct, removeItem } from "../../features/cart/cartSlice";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
    const handleRemoveFromCart = (item : CartProduct) => {
        dispatch(removeItem(item))
    }
  return (
    <div className="my-5">
      {cart.products.map((cartItem) => (
        <>
          <p>DESCRIPTION : {cartItem.description}</p>
          <p>PRICE : {cartItem.price}</p>
          <p>AMOUNT : {cartItem.amount}</p>
          <Button variant="danger" onClick={() => handleRemoveFromCart(cartItem)}>
            <BsFillTrashFill />
          </Button>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Cart;
