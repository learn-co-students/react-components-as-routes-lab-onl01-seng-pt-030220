import React from 'react';
import { act } from 'react-test-renderer';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, i) => 
        <div className="actor" key={i}>
            {actor.name}
          <ul>
            {actor.movies.map(movie => <li>{movie}</li>)}
          </ul>
        </div> 
      )}
    </div>
  );
};

export default Actors;
