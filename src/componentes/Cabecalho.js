import React from "react";
import logo from '../imagens/logo.png';
import login from '../imagens/login.png';

function Cabecalho(){
    return(
        <header>
          <img id="logo" src={logo} alt="Logo"/>
          <a href="#">Produtos</a>
          <a href="#">Sobre Nós</a>
          <a href="#">Contato</a>
          <img id="login" src={login} alt="Login"/>
        </header>
    );
}

export default Cabecalho;