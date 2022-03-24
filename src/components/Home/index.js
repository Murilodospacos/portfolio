import React from 'react';
import VideoPlayer from "../Iframe/YoutubeEmbed"
import NavBar from '../NavBar/index';
import PdfCurriculo from '../../Documents/Curriculo-Murilo.pdf';
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
          <div className='pdf-curriculo'>
            <a href = { PdfCurriculo } target = "_blank" rel="noreferrer">Download Currículo</a>
          </div>
        </div>
        <div className='video-pitch'>
          <VideoPlayer embedId="HLrNMwTHd1w"/>
        </div>
      </div>
    </div>
  )
}
