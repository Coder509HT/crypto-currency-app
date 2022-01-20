import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import coinReducer from "./redux/coinReducer";
import coinSaga from "./saga/coinSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    coins: coinReducer,
  },
  middleware: [saga],
});

saga.run(coinSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
