import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>

    <Provider store={store}>
      {/*provider helps in providing our store to the react app */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      
    </Provider>

  </BrowserRouter>
)
