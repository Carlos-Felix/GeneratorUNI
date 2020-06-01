import React from 'react';
import './App.css';
import List from './List';

class App extends React.Component{
  render(){
    return (
      <div id = "grid">
          <div></div>   
          <List />          
          <div></div>
          <div></div>
          <div id = "cont-btn-crear-horario"><button id = "btn-crear-horario">Ver Horario</button></div>
          <div></div>
          <div></div>
          <div></div> 
      </div>
  )
  }
}

export default App;
