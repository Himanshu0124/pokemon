import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';


const Demo = (name) => {
    return <div className="maindiv">
    <h1>Hello {name}</h1>
    <h2>Here is my Second Heading</h2>
    </div>
}
 

export default Demo;