import React from "react";
import { Navbar } from "./app/components";
import {Explore} from './pages'
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
        <Route path="/explore" element={<Explore />}/>
      </Routes>
    </Router>
  );
}

export default App;
