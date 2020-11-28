import React, { useState } from "react";
import "./styles.css";
import { Catalog } from "./components/Catalog";
import { MELI } from "./api/api";
import { SearchBar } from "./components/SearchBar";

export default function App() {
  const [products, setProducts] = useState([]);
  const [paging, setPaging] = useState({});

  let arreglo = [];

  for (let i = 0; i < 120; i++) {
    arreglo.push(`asdasd + ${i}`);
  }

  async function getProducts(title, filters = null) {
    let response = await MELI.searchProduct(title, filters);
    setProducts(response[0]);
    setPaging(response[1]);
    console.log("getting");
  }

  return (
    <div className="App">
      {/* <Paginator items={arreglo} limit={10}>
        <ItemsPrinter />
      </Paginator> */}
      <div className="container p-2">
        <SearchBar
          getProducts={getProducts}
          paging={paging}
          setPaging={setPaging}
        />
        <Catalog products={products} paging={paging} setPaging={setPaging} />
      </div>
    </div>
  );
}
