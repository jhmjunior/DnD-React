import React from "react"
import { Link, useNavigate } from "react-router-dom";
import './styles.css'
import Logo from '../../assets/home/logo.jpg'

function Header(){
  const navigate = useNavigate();

  return (
    <header>
      <Link to='https://dnd.wizards.com/' target="_blank"><img id='logo' src={Logo} />
      </Link>
      <nav>
        <ul>
          <Link style={{ textDecoration:'none'}} to='/DnD-React'>
            <li>Home</li>
          </Link>
          <Link style={{ textDecoration:'none'}} to='/fotos'>
            <li>Fotos</li>
          </Link> 
          <Link style={{ textDecoration:'none'}} to='/comentarios'>
          <li>Comentários</li>
          </Link>
          <Link style={{ textDecoration:'none'}} to='/contato'>
            <li>Contato</li>
          </Link> 

        </ul>
      </nav>
    </header>
  )
}


export default Header;