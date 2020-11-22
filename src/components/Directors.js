import React from 'react';
import { directors } from '../data';

const Directors = () => {
  
  const directorList = directors.map(director => {
    return(
      <div>
        <h3>{director.name}</h3>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  })  
  
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
