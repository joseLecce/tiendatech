import React from "react";
import CartWidget from "./CartWidget";

export default function Navbar() {
  return (
    <>
      <h5>Tienda Tech®</h5>
      <ul>
        <li>
          <a href="http://www.google.com">Micro Procesadores</a>
        </li>
        <li>
          <a href="http://www.google.com">Memorias</a>
        </li>
          <a href="http://w
        <li>ww.google.com">Tarjetas Graficas</a>
        </li>
        <li>
          <a href="http://www.google.com">Monitores</a>
        </li>
        <li>
          <a href="http://www.google.com">Accesorios</a>
        </li>
      </ul>
      <CartWidget />
    </>
  );
}
