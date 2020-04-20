import _ from "lodash";

export function pagination(listeElement, pageEncours, nbArticlesParPage) {

  const indexDepart = (pageEncours - 1) * nbArticlesParPage;

  return _.chain(listeElement) 
    .slice(indexDepart) 
    .take(nbArticlesParPage) 
    .value(); 
}