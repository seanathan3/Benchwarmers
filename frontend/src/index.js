import React from "react";
import ReactDOM from "react-dom/client";
import './reset.css';
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./store/store";
import { ModalProvider } from "./context/Modal";
import jwtFetch from "./store/jwt";
import { Wrapper } from '@googlemaps/react-wrapper'
import { formatTime } from "./utils/utils";

let store = configureStore({});

function Root() {
  return (
    <ModalProvider>
      <Provider store={store}>
        <BrowserRouter>
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
          <App />
        </Wrapper>
        </BrowserRouter>
      </Provider>
    </ModalProvider>
  );
}

window.store = store;
window.jwtFetch = jwtFetch;
window.formatTime = formatTime;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
