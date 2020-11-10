import React from 'react';
import { actors } from '../data';


//LEARN.CO ANSWER

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
          <div key={index}>
              <h3>Name: {actor.name}</h3>
              <p>Movies:</p>
              <ul>
                  {actor.movies.map((movie, index) => (
                      <li key={index}>{movie}</li>
                  ))}
              </ul>
          </div>
      ))}
    </div>
  );
};

//MY ANSWER
// const Actors = () => {
//   //console.log(actors, "this is actors")
//   //actors.map(actor => { console.log(actor.name, "this is actor")})
//   return (
//     <div>
//      <h1>Actors Page</h1>
//      {actors.map(actor => {
//           return <div className="actor"> 
//             Name: {actor.name}
//             <ul>Movies: {actor.movies.map(movie => {
//               return <div>{movie} </div>
//             })} </ul>
//           </div>
    
//       }
//      )}
//     </div>
//   );
// };

export default Actors;
