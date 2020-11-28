import React, { useEffect, useState } from "react";
import { Paginator } from "./Paginator";
import { Paging } from "./Paging";
export function SearchBar(props) {
  const [query, setQuery] = useState("Mario Bros");
  const [nuevo, setNuevo] = useState(true);
  const [orden, setOrden] = useState("relevance");
  const [pag, setPag] = useState({
    total: props.paging.total,
    limit: props.paging.limit,
    offset: props.paging.offset,
    primary_results: props.paging.primary_results
  });

  function toogleNuevo(e) {
    setNuevo(!nuevo);
  }

  function handleChangeOrdenar(e) {
    setOrden(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit", query);
    props.getProducts(query, {
      sort: orden,
      itemNew: nuevo,
      paging: {
        limit: 30,
        offset: pag.offset
      }
    });
  }

  useEffect(() => {
    props.getProducts(query, {
      sort: orden,
      itemNew: nuevo,
      paging: pag
    });
  }, [orden, nuevo, pag]);

  return (
    <>
      <form className="form-inline" action="#!" onSubmit={handleSubmit}>
        <div className="md-form col-md-12 ">
          <input
            className="form-control col-md-12"
            type="text"
            placeholder="Buscar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
          />
        </div>
      </form>
      <hr />

      <form className="form-inline">
        <div className="form-group">
          <label
            className="filter-col p-2"
            style={{ marginRight: 0 }}
            htmlFor="pref-orderby"
          >
            Ordenar por:
          </label>
          <select
            value={orden}
            onChange={handleChangeOrdenar}
            id="pref-orderby"
            className="form-control"
          >
            <option value={"price_asc"}>Menor Precio</option>
            <option value={"price_desc"}>Mayor Precio</option>
            <option value={"relevance"}>Relevancia</option>
          </select>
        </div>{" "}
        {/* form group [order by] */}
        <div className="form-group">
          <div
            className="checkbox"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <label>
              Nuevo:
              <input
                className="m-2"
                name="nuevo"
                type="checkbox"
                checked={nuevo}
                onChange={toogleNuevo}
              />
            </label>
          </div>
          <div
            className="checkbox"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            <label>
              Usado:
              <input
                className="m-2"
                name="usado"
                type="checkbox"
                checked={!nuevo}
                onChange={toogleNuevo}
              />
            </label>
          </div>
        </div>
      </form>
      <hr />
      <Paging setPaging={setPag} paging={pag} />
    </>
  );
}
