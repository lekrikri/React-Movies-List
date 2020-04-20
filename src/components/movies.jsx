import React, { Component, useState } from "react";
import { getMovies } from "../services/moviesService";
import Pagination from "./pagination";
import { pagination } from "../utils/pagination";
import styles from './movies.module.css';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Badge from '@material-ui/core/Badge';




class Movies extends Component {


  state = {
    movies: getMovies(), // initialiser la valeur de posts
    nbArticleParPage: 4,
    pageEncours: 1
  };
  

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => {
      return m.id !== movie.id;
    });
    this.setState({ movies: movies });
  };

  

  gestionClick = (e, numPage) => {
    e.preventDefault();

    this.setState({ pageEncours: numPage });
    
    console.log("j'ai cliqué", numPage);
  };

  render() {

   
    const { length: count }  = this.state.movies;

    

    const { nbArticleParPage, pageEncours, movies } = this.state;

    if (count === 0) return <p>Aucun article dans la base de données</p>;
  

    const pages = pagination(movies, pageEncours, nbArticleParPage);
    

    return (
          
      <div className={styles.root}>
      <GridList cellHeight={550} className={styles.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: '100' }}>
          <ListSubheader component="div"><h1>{count} Articles dans la base de données</h1></ListSubheader>
        </GridListTile>
        {pages.map((movies)  => (
          <GridListTile key={movies.poster}>
            <img src={movies.poster} alt={movies.title} />
            
            <GridListTileBar
              className="text-center"
              title={movies.title}
              subtitle={<span>{movies.categorie.nom}</span>}
              actionPosition={'left'}
              actionIcon={
                <IconButton aria-label={`info about ${movies.title}`} className={styles.icon} >
                  <Badge badgeContent={movies.likes} color="primary">
                     <ThumbUpAltIcon p={1} className={styles.thumbUpAltIcon} />
                  </Badge>
                  <Badge badgeContent={movies.dislikes} color="primary">
                     <ThumbDownIcon className={styles.thumbUpAltIcon} />
                  </Badge>  
                  <DeleteIcon className={styles.icon}
                  onClick={() => this.handleDelete(movies)}
                   />
                   
                   
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>

    <Pagination
    totalArticles={count}
    nbArticleParPage={nbArticleParPage}
    pageEncours={pageEncours}
    gestionClick={this.gestionClick} 
    />
   </div>
    );
  };
};
  




export default Movies;
