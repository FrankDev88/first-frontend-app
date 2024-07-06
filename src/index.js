import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Saludar() {
  return <h1>hello world</h1>;
}
root.render(
  <>
    esto me permite usar la funcion como si fuera una etiqueta
    <Saludar></Saludar>
    <Saludar></Saludar>
    <Saludar />
  </>
);
