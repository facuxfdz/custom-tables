import React from "react";
import { Navbar } from "./app/components";
import { Explore } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./app/context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
