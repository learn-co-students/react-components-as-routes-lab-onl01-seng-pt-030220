import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'purple',
  textDecoration: 'none',
  fontWeight: 'bold',
  color: 'white',
  borderRadius: '0px 20px',
}

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink to='/' exact style={link} activeStyle={{background: 'green'}}>Home</NavLink>
      <NavLink to='/movies' exact style={link} activeStyle={{background: 'green'}}>Movies</NavLink>
      <NavLink to='/directors' exact style={link} activeStyle={{background: 'green'}}>Directors</NavLink>
      <NavLink to='/actors' exact style={link} activeStyle={{background: 'green'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
