import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Pokemon from './Pokemon';
import first from './chikorita.png';
import second from './pikachu.png';
import third from './catapee.png';
import four from './charmendor.png';
import five from './valbasaur.png'; 
import six from './saiduck.png'; 
import seven from './snorlax.png'; 
import eight from './squartiel.png'; 
import nine from './tortodile.png'; 
import ten from './bayLeaf.png'; 
import eleven from './charjdyur.png'; 
import twelve from './labrous.png'; 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Pokemon  id="1" name="Pikachu" work="Pokemon" myimg={second} />
    <Pokemon  id="2" name="Chikorita" work="Pokemon" myimg={first} />
    <Pokemon  id="3" name="Catapee" work="Pokemon" myimg={third} />
    <Pokemon  id="4" name="Charmendor" work="Pokemon" myimg={four} />
    <Pokemon  id="5" name="Valbasaur" work="Pokemon" myimg={five} />
    <Pokemon  id="6" name="SaiDuck" work="Pokemon" myimg={six} />
    <Pokemon  id="7" name="Snorlax" work="Pokemon" myimg={seven} />
    <Pokemon  id="8" name="Squartiel" work="Pokemon" myimg={eight} />
    <Pokemon  id="9" name="Tortodile" work="Pokemon" myimg={nine} />
    <Pokemon  id="10" name="BayLeaf" work="Pokemon" myimg={ten} />
    <Pokemon  id="11" name="Charijdyur" work="Pokemon" myimg={eleven} />
    <Pokemon  id="12" name="Labrous" work="Pokemon" myimg={twelve} />

    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
