import React from "react";
import { Navbar } from "./app/components";
import { ItemListContainer } from "./features/tables";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/explore" element={<ItemListContainer title="Explore our products" />}/>
      </Routes>
    </Router>
  );
}

export default App;
