import React from 'react';
import { setTokenSourceMapRange } from 'typescript';
import './css/App.css';

import Home from './pages/Home';

const App = (): JSX.Element => {


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
              Projects / work
            </a>
          </button>
          <button>
            <a href='#about'>
              About
            </a>
          </button>
          <button>
            <a href='#blog'>
              Blog
            </a>
          </button>
          <button>
            <a href='#contact'>
              Contact
            </a>
          </button>
        </div>

        <Home />

        <div style={{ backgroundColor: 'green', width: '100vw', height: '100vh' }} id='projects' />
        <div style={{ backgroundColor: 'blue', width: '100vw', height: '100vh' }} id='about' />
        <div style={{ backgroundColor: 'green', width: '100vw', height: '100vh' }} id='blog' />
        <div style={{ backgroundColor: 'blue', width: '100vw', height: '100vh' }} id='contact' />
      </div>
    </React.Fragment>
  );
}

export default App;