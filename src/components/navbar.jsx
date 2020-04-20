import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import movies from "../components/movies";
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
import { getMovies } from "../services/moviesService";
import { getCategories } from "../services/categoriesService";
import { categories } from '../services/categoriesService';


export default function SimpleMenu() {

    
    const { movies }  = {
        movies: getMovies(), 
      };
      const { categorie }  = {
        movies: getCategories(), 
      };
      
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Categories
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} >
        <NavLink to="movies/:thriller"> Thriller </NavLink>
        </MenuItem>
        <MenuItem onClick={handleClose}>Animation</MenuItem>
        <MenuItem onClick={handleClose}>Drame</MenuItem>
        <MenuItem onClick={handleClose}>Comedy</MenuItem>
      </Menu>
    </div>
  );
}