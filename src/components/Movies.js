import React from 'react';
import { movies } from '../data';


//LEARN.CO

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
          <div key={index}>
              <h3>Name: {movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                  {movie.genres.map((genre, index) => (
                      <li key={index}>{genre}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

//My ANSWER
// const Movies = () => {
//   return (
//     <div>
//         <h1>Movies Page</h1>
//         {movies.map(movie => {
//           return <div> 
//             <h2>{movie.title} </h2>
//             <p>{movie.time}</p>
//             {movie.genres.map(genre => {
//               return <div>{genre} </div>
//             })}
          
//           </div>
//         })}
//     </div>
//   );
// };

export default Movies;
