import React from "react";
import { Alert, Button } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { BsFillTrashFill } from "react-icons/bs";
import { CartProduct, removeItem } from "../../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cart = useAppSelector((state) => state.cart);
  const totalPurchase = useAppSelector(state => state.cart.products.length > 0 ? state.cart.products.map(product => product.price*(product?.amount || 1)).reduce((acum,curr) => acum + curr) : 0)
  const dispatch = useAppDispatch();
  const handleRemoveFromCart = (item: CartProduct) => {
    dispatch(removeItem(item));
  };
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }
  return (
    <div className="my-5 d-flex flex-column align-items-center">
      { totalPurchase > 0 ? (
        cart.products.map((cartItem) => (
        <div key={cartItem.id} className="d-flex flex-column">
          <>
            <p><b>DESCRIPTION</b>: {cartItem.description}</p>
            <p><b>PRICE</b>: ${cartItem.price}</p>
            <p><b>AMOUNT</b>: {cartItem.amount}</p>
          </>
          <div className="text-center">
          <Button
            variant="danger"
            onClick={() => handleRemoveFromCart(cartItem)}
            className="w-50"
          >
            <BsFillTrashFill />
          </Button>
          <hr />
          </div>
          <h1>Total</h1><b>${totalPurchase}</b>
    <Button className="my-5" variant="warning">
        Confirm cart
    </Button>
        </div>
      )))
      :(
        <>
        <Alert className="my-5" variant="warning" >NO PRODUCTS ADDED YET</Alert>
        <Button variant="primary" onClick={handleBack}>
          Back to home
        </Button>
        </>
        )
      }


    </div>
  );
};

export default Cart;
