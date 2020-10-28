import React from 'react';
import './App.css';
import './css/styles.css';
import ReactGa from 'react-ga';
import Main from './components/MainComponent';

import { Provider } from 'react-redux';
import { store,persistor } from './redux/configureStore';

import { PersistGate } from 'redux-persist/integration/react';
//const store = ConfigureStore();

      
class App extends React.Component{
  componentDidMount(){
    ReactGa.initialize('UA-170487182-1')
    ReactGa.pageview('/')
  }
  render(){
    return (
      <Provider store={store}>
        <PersistGate persistor = {persistor}>
          <div className="App">
            <Main />
          </div>
        </PersistGate>
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
