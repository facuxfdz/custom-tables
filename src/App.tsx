import React from "react";
import { Navbar } from "./app/components";
import { ItemListContainer } from "./features/tables";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer title="Contenedor" />
    </>
  );
}

export default App;
