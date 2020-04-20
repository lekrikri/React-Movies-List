
import React from "react";
import _ from "lodash";


const Pagination = ({
  totalArticles,
  nbArticleParPage,
  pageEncours,
  gestionClick
}) => {
  const nbPage = Math.ceil(totalArticles / nbArticleParPage);

  if (nbPage === 1) return null;

  const pages = _.range(1, nbPage + 2)

  return (
    <ul className="pagination">
      {pages.map(numPage => {
        return (
          <li
            key={numPage}
            className={
              pageEncours === numPage ? "page-item active" : "page-item"
            }
          >
            <button
              className="page-link"
              href="#"
              onClick={e => gestionClick(e, numPage)}
            >
              
              {numPage}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
