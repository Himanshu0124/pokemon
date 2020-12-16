import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Pokemon.css'; 
import first from './chikorita.png';
import second from './pikachu.png';

const Pokemon = (props) => {
    return (
    <div className="pokemoncls"> 
            <img src={props.myimg}  />
            <h3 className="tc">{props.work}</h3>
            <h1>{props.name}</h1>
           </div>
           )
}
export default Pokemon;