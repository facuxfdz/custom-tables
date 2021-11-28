import React, {useState} from "react";

const CartWidget = () => {
  const [cartAmount, setCartAmount] = useState(false);
  const handleCart = () => {
    setCartAmount(!cartAmount);
  };

  return (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" onClick={handleCart} href="#">
          <span>
            <i className="fas fa-shopping-cart"></i>
          </span>
          {cartAmount ? (
            <span className="badge rounded-pill mx-1 badge-pill bg-danger">
              1
            </span>
          ) : null}
        </a>
      </li>
    </ul>
  );
};

export default CartWidget;
