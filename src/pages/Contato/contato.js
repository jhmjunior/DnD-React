import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import emailjs from '@emailjs/browser'
import './cto-styles.css';

function Contato() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState ('')
  const[message, setMessage] = useState ('')

  function sendEmail(e){
    e.preventDefault();

    if (name ==='' || email ==='' || message === '') {
      alert("Preencha todos os campos corretamente");
      return;
    }

    const templateParams ={
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_7kdnhqj", "template_6dwkl7m", templateParams, "sXkTyTayvzDWEI4Wx")
    .then((response) => {
      alert('Obrigado por entrar em contato! Em breve responderemos sua mensagem!')
      console.log("Email Enviado!", response.status, response.text)
      setName('')
      setEmail('')
      setMessage('')

    }, (err) => {  
      console.log("Erro", err)
    })
  }
  
  return(
    <>
      <div id='body-bg'>
        <Header />
        <h1>Fale com o desenvolvedor!</h1>
        <div id="textbox">
          <form id='form-box' onSubmit={sendEmail}>
              <label for="Nome">Nome</label>
              <input style={{display:'block'}} id="nome" name="CaixaTexto" placeholder="Insira seu nome aqui" onChange={(e) => setName(e.target.value)} value={name}/>

              <label for="email">E-mail</label>
              <input style={{display:'block'}} id="email" name="email" placeholder="Digite seu email." onChange={(e) => setEmail(e.target.value)} value={email}/>

              <label for="mensagem">Digite aqui sua mensagem</label>
              <textarea style={{display: 'block'}} id="Mensagem" name="mensagem" rows="30" placeholder="Digite aqui sua mensagem" onChange={(e) => setMessage(e.target.value)} value={message}/>
              
              <button id="cto-button">Enviar</button>
              
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Contato;