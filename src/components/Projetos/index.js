import React from 'react';
import NavBar from '../NavBar';
import './styles.css';

export default function Projetos() {
  return (
    <div className='projetos-body'>
      <NavBar />
      <h1 className='projetos-H1'>Front-End</h1>
        <div className='projetos-container'>
          <div className='projetos-div'>
            <div className='projetos-front'>
              <a href="https://murilodospacos.github.io/trybe-projects/Project-Pixels-Art/" target="_blank" rel="noreferrer">
                <h2 className='projetos-H2'>Pixel Art</h2>
              </a>
            </div>
            <a href='https://github.com/Murilodospacos/trybe-projects/tree/main' target="_blank" rel='noreferrer'>
              <h3 className='projetos-H3'>Código GitHub</h3>
            </a>
          </div>
          
          <div className='projetos-div'>
            <div className='projetos-front'>
              <a href="https://murilodospacos.github.io/trybe-projects/Project-Pixels-Art/" target="_blank" rel="noreferrer">
                <h2 className='projetos-H2'>Todo List</h2>
              </a>
            </div>
            <a href='https://github.com/Murilodospacos/trybe-projects/tree/main' target="_blank" rel='noreferrer'>
              <h3 className='projetos-H3'>Código GitHub</h3>
            </a>
          </div>
        </div>

        <hr />

        <h1 className='projetos-H1-back'>Back-End</h1>
          <div className='projetos-container'>
            <div className='projetos-div'>
              <div className='projetos-back'>
                <a href="https://murilodospacos.github.io/trybe-projects/Project-Pixels-Art/" target="_blank" rel="noreferrer">
                  <h2 className='projetos-H2'>Projeto 1</h2>
                </a>
              </div>
              <a href='https://github.com/Murilodospacos/trybe-projects/tree/main' target="_blank" rel='noreferrer'>
                <h3 className='projetos-H3'>Código GitHub</h3>
              </a>
            </div>

            <div className='projetos-div'>
              <div className='projetos-back'>
                <a href="https://murilodospacos.github.io/trybe-projects/Project-Pixels-Art/" target="_blank" rel="noreferrer">
                  <h2 className='projetos-H2'>Projeto 2</h2>
                </a>
              </div>
              <a href='https://github.com/Murilodospacos/trybe-projects/tree/main' target="_blank" rel='noreferrer'>
                <h3 className='projetos-H3'>Código GitHub</h3>
              </a>
            </div>
          </div>
        

    </div>
  )
}
