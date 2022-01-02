import React from 'react';
import NavBar from '../NavBar/index';
import './styles.css';

import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Home() {
  return (
    <div className='home-body'>
      <NavBar />
      <div className="home-container">
        <div className="home-content">
          <div className="home-container-name">
            <p className="home-P">Hello World,</p>
            <h1 className="home-H1">Sou o Murilo</h1>
            <div className="home-contacts-icon">
              <a href="https://www.linkedin.com/in/murilodospacos/"
              target="_blank"
              rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Murilodospacos"
              target="_blank"
              rel="noopener noreferrer">
                <AiFillGithub /></a>
              <a href="mailto:murilopacos@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
                <AiOutlineMail />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=5519991486489&text&app_absent=0"
              target="_blank"
              rel="noopener noreferrer">
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>
          <div className='video'>
            <div className='video-container'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/KqijthboFpU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
