import React, { createContext, FC, useState } from "react";

interface ICartContext {
  cartAmount: number;
  incrementAmount: (amount: number) => void;
  decrementAmount: (amount: number) => void;
}

const defaultState = {
  cartAmount: 0,
  incrementAmount : (amount : number) => null,
  decrementAmount: (amount : number) => null
};

export const CartContext = createContext<ICartContext>(defaultState);

export const CartProvider: FC = ({ children }) => {
  const [cartAmount, setCartProducts] = useState(defaultState.cartAmount);

  const incrementAmount = (amount: number) => {
    setCartProducts((prevAmount) => prevAmount + amount);
  };

  const decrementAmount = (amount: number) => {
    setCartProducts(cartAmount > 0 ? (prevAmount) => prevAmount - amount : 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartAmount,
        incrementAmount,
        decrementAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
