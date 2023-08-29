import React from "react"
import { Link, useNavigate } from "react-router-dom";
import './styles.css'
import FooterLogo from '../../assets/home/logo.png'
import GitLogo from '../../assets/home/github2.png';

function Footer () {
  const navigate = useNavigate();
  
  return(
    <footer>
      <nav className="footer-navigation" >
        <ul className='footer-list'>
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
      <br />
      <Link to='https://dnd.wizards.com/' target="_blank"><img id='FooterLogo' src={FooterLogo} />
      </Link>
      <span id='disclaimer'>Todos os direitos reservados ©
        <br />
        Desenvolvido por Junior Martins
      </span>
      <Link to='https://github.com/jhmjunior' target='_blank'><img id='github' src={GitLogo}/>
      </Link>
    </footer>
  )
}

export default Footer