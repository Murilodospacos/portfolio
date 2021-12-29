import React from 'react';
import './styles.css';
import NavBar from '../NavBar';

import { GiStrong, GiArrowsShield } from "react-icons/gi";

import { AiFillBulb, AiOutlineSchedule } from "react-icons/ai";

import {
  IoLogoGithub,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoCss3,
  IoIosPeople,
  IoIosTimer,
  } from "react-icons/io";
  
  import { 
    DiLinux,
    DiWindows,
  } from "react-icons/di";
  
  import {
    SiExpress,
    SiReact,
    SiMongodb,
    SiMysql,
    SiGit,
    SiHeroku,
    SiSocketdotio,
    SiSlack,
    SiZoom,
    SiVisualstudiocode
  } from "react-icons/si";

export default function Skills() {
  return (
    <div className='skills-body'>
      <NavBar />

          <div className='skills-container'>
            <div className='skills-container-Hard'>
              <h2 className='skills-H2'>Hard Skills</h2>
              <ul className='skills-list-hard'>
              <li><IoLogoGithub /></li>
              <li><SiReact /></li>
              <li><IoLogoNodejs /></li>
              <li><SiSocketdotio /></li>
              <li><SiMongodb /></li>
              <li><SiGit /></li>
              <li><IoLogoHtml5 /></li>
              <li><IoLogoJavascript /></li>
              <li><IoLogoCss3 /></li>
              <li><SiExpress /></li>
              <li><SiHeroku /></li>
              <li><SiVisualstudiocode /></li>
              </ul>
            </div>
            <hr />
            <div className='skills-container-soft'>
              <h2 className='skills-H2'>Soft Skills</h2>
                <div className='skills-container-div'>
                  <div className='skills-Soft'>
                    <h3 className='skills-H3'>Trabalho em Equipe</h3>
                    <IoIosPeople font-size="30px"/>
                  </div>

                  <div className='skills-Soft'>
                    <h3 className='skills-H3'>Resiliente</h3>
                    <GiStrong font-size="30px" />
                  </div>

                  <div className='skills-Soft'>
                    <h3 className='skills-H3'>Criativo</h3>
                    <AiFillBulb font-size="30px" />
                  </div>
      
                  <div className='skills-Soft'>
                    <h3 className='skills-H3'>Responsável</h3>
                    <AiOutlineSchedule font-size="30px" />
                  </div>

                  <div className='skills-Soft'>
                    <h3 className='skills-H3'>Paciência</h3>
                    <IoIosTimer font-size="30px" />
                  </div>

                  <div className='skills-Soft'>
                    <h3 className='skills-H3'>Focado</h3>
                    <GiArrowsShield font-size="30px" />
                  </div>
                </div>
            </div>
            <hr />
            <div className='skills-Tolls'>
              <h2 className='skills-H2'>Ferramentas</h2>
                <ul className='SobreUl'>
                  <li><DiLinux /></li>
                  <li><DiWindows /></li>
                  <li><SiSlack /></li>
                  <li><SiZoom /></li>
                  <li><SiMysql /></li>
                </ul>
            </div>
          </div>
    </div>
  )
}
