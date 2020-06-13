import React from 'react';
import './App.css';
//import './components/Horario.css'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

import List from './components/Api';

class App extends React.Component{
  render(){
    return (
      <List></List>
  )
  }
}/*
<Router>          
      <Route exact path = "/" component = {List} />
      <Route exact path = "/horario" component = {Horario} />
      </Router>*/
export default App;
