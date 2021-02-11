import React from "react";
import ReactDOM from "react-dom";

import { HashRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";

import App from "./App";

import { store } from "./features/redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <Router basename="/">
          <App />
        </Router>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
