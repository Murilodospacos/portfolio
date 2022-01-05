import React from 'react'
import './styles.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
     <header className='navbar-header'>
      <Link to="/" style={{ textDecoration: 'none' }}><h2 className='navbar-h2'>{`<Portfólio />`}</h2></Link>
      <nav className='navbar-nav'>
        <Link to="/" style={{ textDecoration: 'none' }}><h3 className='navbar-h3'>Home</h3></Link>
        <Link to="/sobre" style={{ textDecoration: 'none' }}><h3 className='navbar-h3'>Sobre</h3></Link>
        <Link to="/skills" style={{ textDecoration: 'none' }}><h3 className='navbar-h3'>Skills</h3></Link>
        <Link to="/projetos" style={{ textDecoration: 'none' }}><h3 className='navbar-h3'>Projetos</h3></Link>
      </nav>
     </header> 
  )
}
