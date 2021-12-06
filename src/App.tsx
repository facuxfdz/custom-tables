import React from "react";
import { Navbar } from "./app/components";
import { Cart, ItemDetail, ItemListContainer as Explore } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path="/explore" element={<Explore />} />
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products/:productId" element={<ItemDetail />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
