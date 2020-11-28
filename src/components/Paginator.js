import React, { useState } from "react";

export function Paginator(props) {
  const maxLinks = 6;
  const linksPerSide = Math.trunc(maxLinks / 2);

  let itemsPerPage = props.limit || 30;
  let items = props.items || [];
  let length = items.length || 0;
  let pages = length > itemsPerPage ? Math.trunc(length / itemsPerPage) : 1;

  const [currentPage, setCurrentPage] = useState(1);

  function renderLinks() {
    let lis = [];

    let firstLink =
      currentPage - linksPerSide > 0 ? currentPage - linksPerSide : 1;
    let lastLink =
      currentPage + linksPerSide >= maxLinks
        ? currentPage + linksPerSide
        : maxLinks;

    lastLink =
      lastLink - firstLink < maxLinks ? firstLink + maxLinks : lastLink;
    console.log(firstLink, lastLink);

    for (let i = firstLink; i <= lastLink; i++) {
      let disabled = false;
      if (i > pages) {
        disabled = true;
      }
      lis.push(
        <li className={disabled ? "page-item disabled" : "page-item"}>
          <button
            className="page-link btn-dark"
            value={i}
            onClick={(e) => setCurrentPage(parseInt(e.target.value))}
          >
            {i}
          </button>
        </li>
      );
    }

    return lis;
  }

  let children = React.Children.map(props.children, (child) =>
    React.cloneElement(child, {
      items: items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    })
  );

  return (
    <>
      <h1>Paginator</h1>
      <div className="container">
        {children}

        <div className="container p-2 m-2">
          <nav aria-label="Page navigation example">
            {renderLinks() ? <ul class="pagination ">{renderLinks()}</ul> : ""}
          </nav>
        </div>
      </div>
    </>
  );
}
