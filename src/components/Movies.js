import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieList = movies.map(movie => {
    return (
      <div>
          <h3>{movie.title}</h3>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map(genre => <li>{genre}</li>)}
          </ul>
      </div>
    );
  })

  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      { movieList }
    </div>
  )

};

export default Movies;
