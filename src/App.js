import React from 'react';
import './App.css';
import './css/styles.css';
import ReactGa from 'react-ga';
import Main from './components/MainComponent';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

      
class App extends React.Component{
  componentDidMount(){
    ReactGa.initialize('UA-170487182-1')
    ReactGa.pageview('/')
  }
  render(){
    return (
      <Provider store={store}>
          <div className="App">
            <Main />
          </div>
     </Provider>
  )
  }
}
/*
function App() {
  return (
    <Provider store={store}>
          <div className="App">
            <Main />
          </div>
     </Provider>
  );
}
*/
export default App;
