import React from 'react';
import { NavLink } from 'react-router-dom';

  const link={
    margin: '5px 10px',
    'font-size': 'x-large'
  }
const NavBar = () => {
  return (
    <div className="navbar">
          <NavLink to ="/" exact style={link} activeStyle={{background: 'lightgreen'}} >
             Home
          </NavLink>
          <NavLink to ="/actors" exact style={link} activeStyle={{background: 'lightgreen'}} >
             Actors
          </NavLink>
          <NavLink to ="/directors" exact style={link} activeStyle={{background: 'lightgreen'}} >
             Directors
          </NavLink>
          <NavLink to ="/movies" exact style={link} activeStyle={{background: 'lightgreen'}} >
             Movies
          </NavLink>
    </div>
  );
};

export default NavBar;
