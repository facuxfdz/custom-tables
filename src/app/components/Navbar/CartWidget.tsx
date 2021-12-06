import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks";

const CartWidget = () => {

  const cart = useAppSelector((state) => state.cart )
  let cartAmount = 0
  cart.products.forEach(product => {
    cartAmount += product?.amount || 0
  })

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to='/cart'>
          <span>
            <i className="fas fa-shopping-cart"></i>
          </span>
          {cartAmount ? (
            <span className="badge rounded-pill mx-1 badge-pill bg-danger">
              {cartAmount}
            </span>
          ) : null}
        </Link>
      </li>
    </ul>
  );
};

export default CartWidget;
