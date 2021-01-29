import React from 'react';
import { useState } from 'react';
import { setTokenSourceMapRange } from 'typescript';
import './css/App.css';

import Home from './pages/Home';

const App = (): JSX.Element => {

  const [name, setName] = useState('Goncalo');

  return (
    <React.Fragment>
      <div>
        <div style={{ position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <button>
            <a href='#home'>
              Home
            </a>
          </button>
          <button>
            <a href='#projects'>
              Projects
            </a>
          </button>
          <button>
            <a href='#about'>
              About
            </a>
          </button>
          <button onClick={() => setName(name + ' clicked')}> Change name </button>
          <button onClick={() => setName('Goncalo')}> Reset name </button>
          <div>{name}</div>
        </div>
        <Home />
        <div style={{ backgroundColor: 'green', width: '100vw', height: '100vh' }} id='projects' />
        <div style={{ backgroundColor: 'blue', width: '100vw', height: '100vh' }} id='about' />
      </div>
    </React.Fragment>
  );
}

export default App;