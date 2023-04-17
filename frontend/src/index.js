import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store/store';
import { ModalProvider } from './context/Modal';

let store = configureStore({});

function Root() {
  return (
    <ModalProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </ModalProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)