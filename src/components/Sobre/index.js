import React from 'react';
import './styles.css';
import NavBar from '../NavBar/index';

export default function Sobre() {
  return (
    <div className='sobre-body'>
      <NavBar />
      <div className='sobre-main'>
        <div className='container-sobre'>
          <h1 className="sobre-H1">Sobre</h1>
          <p className="sobre-P">
          Formado em Técnico em mecatrônica, atualmente estou em transição de carreira para área de  Desenvolvimento de Software Web.
          <br/><br/>
          As pessoas com quem trabalhei me consideram uma pessoa educada, disponível para ajudar, responsável e paciente.
          <br/><br/>
          Priorizo estar com a minha família, gosto de fazer novas amizades e a minha paixão atual é aprender a aprender novas linguagens e conceitos com objetivo de me tornar um grande programador e fazer a diferença na vida das pessoas e das empresas por meio da programação e da tecnologia.
          <br/><br/>
          <strong>Hobbies</strong>
          <br/><br/>
          Ler livro, escutar Podcasts,Tocar violão e viola, cantar, assistir series e amo comida japonesa.
          </p>
        </div>
      </div>
    </div>
  )
}
