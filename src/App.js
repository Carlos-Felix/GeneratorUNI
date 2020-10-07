import React from 'react';
import './App.css';
import './css/styles.css'
import Main from './components/MainComponent';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

      


function App() {
  return (
    <Provider store={store}>
          <div className="App">
            <Main />
          </div>
     </Provider>
  );
}

export default App;
