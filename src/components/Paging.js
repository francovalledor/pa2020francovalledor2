import React, { useEffect, useState } from "react";

export function Paging(props) {
  const [total, setTotal] = useState(props.paging.total);
  const [limit, setLimit] = useState(props.paging.limit || 30);
  const [offset, setOffset] = useState(props.paging.offset || 1);
  const [primary_results, setPrimaryResults] = useState(
    props.paging.primary_results
  );

  function aumentarPaging() {
    console.log("aumentar");
    setOffset(offset + limit);
    console.log("offset: ", offset);
  }
  function disminuirPaging() {
    console.log("disminuir");
    let auxOffset = offset - limit > 0 ? offset - limit : 1;
    console.log("offset: ", auxOffset);

    setOffset(auxOffset);
  }

  useEffect(() => {
    console.log("effect");

    props.setPaging({
      total,
      limit: limit,
      offset: offset,
      primary_results: primary_results
    });
  }, [total, limit, offset]);

  return (
    <nav aria-label="...">
      <ul className="pagination">
        <li className={offset === 1 ? "page-item disabled" : "page-item"}>
          <button
            className="page-link btn-dark"
            value={"i"}
            onClick={(e) => {
              disminuirPaging(e);
            }}
          >
            Anterior
          </button>
        </li>
        <li
          className={
            offset + limit >= primary_results
              ? "page-item disabled"
              : "page-item"
          }
        >
          <button
            className="page-link btn-dark"
            value={"i"}
            onClick={(e) => {
              aumentarPaging(e);
            }}
          >
            Siguiente
          </button>
        </li>
      </ul>
    </nav>
  );
}
