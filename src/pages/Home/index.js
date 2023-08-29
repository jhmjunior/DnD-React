import React from "react";
import Header from '../../components/header/header';
import Video from '../../assets/home/video.mp4';
import './styles.css';
import Cards from "../../components/cards";
import Footer from "../../components/footer/footer";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return(
    <>
      <Header />
      <div id='banner'></div>
      <div id='trailer-container'>
          <div className='content'>
              <video controls className='trailer'>
                  <source src={Video} />
                  Seu navegador não possui suporte para vídeos.
              </video>
              <div id='sinopse'>
                <p className='description'>
                  Um ladrão encantador e um bando improvável de aventureiros armam um plano épico para recuperar 
                  uma relíquia perdida. Mas as coisas vão perigosamente mal quando eles encontram as pessoas erradas.
                </p>
                <Link style={{ textDecoration:'none'}} to='https://www.youtube.com/watch?v=6zCTajGt-uM' target='_blank'>
                  <button className='button'>Alugue no Youtube</button>
                </Link>
                
              </div>
          </div>
      </div>
      <Cards />
      <Footer />
    </>
  )
}

export default Home;