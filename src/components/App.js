import React from 'react';
import '../css/App.css';
//import './components/Horario.css'
//import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Api from './Api';

class App extends React.Component{
  render(){
    return (
      <Api></Api>
  )
  }
}/*
<Router>          
      <Route exact path = "/" component = {Api} />
      <Route exact path = "/horario" component = {Horario} />
      </Router>*/
export default App;
