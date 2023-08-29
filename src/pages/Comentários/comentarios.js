import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import './comm-styles.css';

function Comentarios() {
  return(
    <>
      <Header />
      <h1>O que estão dizendo sobre o filme:</h1>
      <div class="containers">
        <div class="actor-cards-container1">
            <div class="comm-cards-content">
                <div class="comm-card c-banner-1">Mestre dos Magos</div>
                <p class="description"> <i>"A jornada deste grupo foi fantástica, mas não consigo avaliar com precisão, pois senti falta de algumas charadas."</i></p>
                <div class="comm-card c-banner-2">Hank</div>
                <p class="description"><i>"Achei interessante a arma da Doric. Será que é possível adaptar meu arco para ser usado daquela maneira?"</i></p>
                <div class="comm-card c-banner-3">Vingador</div>
                <p class="description"><i>"Já sei quem irei contratar para me ajudar com a missão de encontrar as armas mágicos que busco."</i></p>
                <div class="comm-card c-banner-4">Eric</div>
                <p class="description"><i>"Não aprovei. Mal apareci como participação especial. Eu deveria ser o protagonista. Isso não foi mencionado no convite."</i></p>
                <div class="comm-card c-banner-5">Sheila</div>
                <p class="description"><i>"Gostei do Edgin. Sujeito bacana ao qual eu adoraria conversar um pouco mais. A filha dele é muito fofa também."</i></p>
            </div>
        </div>
        <div class="actor-cards-container2">
            <div class="comm-cards-content">
                <div class="comm-card c-banner-6">Bobby</div>
                <p class="description"><i>"A Helga é incrível! Vou pedir pra minha irmã me deixar usar um machado ao inves do meu tacape."</i></p>
                <div class="comm-card c-banner-7">Presto</div>
                <p class="description"><i>"Preciso conversar com o Simon. Talvez ele me dê algumas dicas de como controlar meu chapéu."</i></p>
                <div class="comm-card c-banner-8">Diana</div>
                <p class="description"><i>"Acho que havia uma forma mais eficiente de resolver o problema. Mesmo assim, a equipe deles é legal."</i></p>
                <div class="comm-card c-banner-9">Tiamat</div>
                <p class="description"><i>"Fui convidada a participar do filme, mas tive conflitos de agenda, então mandei um amigo. Talvez na próxima."</i></p>
                <div class="comm-card c-banner-10">Uni</div>
                <p class="description"><i>"Mééééééééééééé"</i></p>
            </div>
        </div>
    </div>
      <Footer />
    </>
  )
}

export default Comentarios;