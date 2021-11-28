import React, { useState } from "react";

const Navbar = () => {
  const [cartAmount, setCartAmount] = useState(false);
  const handleCart = () => {
    setCartAmount(!cartAmount);
  };
  return (
    <div>
      <nav className="p-3 navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explore
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    PC Desk
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Dining room
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bathroom
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
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
              )
              :null
            }
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
