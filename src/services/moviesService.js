
export const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      categorie: {id: '11', nom:'Comedy'},
      poster: '../oceans_8.jpg',
      likes: 4,
      dislikes: 1
    }, {
      id: '2',
      title: 'Midnight Sun',
      categorie: {id: '11', nom:'Comedy'},
      poster:  '../midnight_Sun.jpg',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      categorie: {id: '12', nom:'Animation'},
      poster: "../les_indestructibles_2.jpg",
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      categorie: {id: '13', nom:'Thriller'},
      poster: "../a_quiet_place.jpg",
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      categorie: {id: '14', nom:'Drame'},
      poster: "../creed2.jpg",
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      categorie: {id: '13', nom:'Thriller'},
      poster: "../pulp_fiction.jpg",
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      categorie: {id: '13', nom:'Thriller'},
      poster: "../pulp_fiction.jpg",
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      categorie: {id: '13', nom:'Thriller'},
      poster: "../seven.jpg",
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      categorie: {id: '13', nom:'Thriller'},
      poster: "../inception.jpg",
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      categorie: {id: '13', nom:'Thriller'},
      poster: "../gone_girl.jpg",
      likes: 22,
      dislikes: 12
    },
  ];

  export function getMovies() {
    return movies;
  }
  
  export function getMovie(id) {
    return movies.find(m => m.id === id);
  }

  export function deleteMovie(id) {
    let movieInDb = movies.find(m => m.id === id);
    movies.splice(movies.indexOf(movieInDb), 1);
    return movieInDb;
  }
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))