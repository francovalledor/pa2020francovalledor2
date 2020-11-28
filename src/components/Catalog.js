import React from "react";
import { Product } from "./Product";

export function Catalog(props) {
  let products = props.products || [];
  function renderProducts() {
    return products.map((product) => (
      <Product product={product} key={product.id} />
    ));
  }
  return (
    <>
      <h2>Catalogo</h2>
      <div className="container">
        <div className="card-deck">
          <div className="card-group">{products ? renderProducts() : ""}</div>
        </div>
      </div>
    </>
  );
}
