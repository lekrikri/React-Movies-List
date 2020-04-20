import React, { Component } from "react";
import { getCategories } from "../services/categoriesService";
import { pagination } from "../utils/pagination";
import Pagination from "./pagination";

class Categorie extends Component {
  state = {
    categories: getCategories(),
    nbCategorieParPage: 2,
    pageEnCours: 1
  };

  delete = categorie => {
    const filtredCategorie = this.state.categories.filter(
      c => c.id !== categorie.id
    );
    this.setState({ categories: filtredCategorie });
  };

  gestionClick = (e, numPage) => {
    e.preventDefault();
    this.setState({ pageEnCours: numPage });

  };

  render() {
    const { categories, nbCategorieParPage, pageEnCours } = this.state;

    if (this.state.categories.length === 0)
      return <p>Aucune catégorie disponible</p>;

    const categoriePagine = pagination(
      categories,
      pageEnCours,
      nbCategorieParPage
    );


    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">action</th>
            </tr>
          </thead>
          <tbody>
            {categoriePagine.map((categorie, index) => {
              return (
                <tr key={categorie.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{categorie.nom}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => this.delete(categorie)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Pagination
          totalArticles={categories.length}
          nbArticleParPage={nbCategorieParPage}
          pageEncours={pageEnCours}
          gestionClick={this.gestionClick}
        />
      </React.Fragment>
    );
  }
}

export default Categorie;