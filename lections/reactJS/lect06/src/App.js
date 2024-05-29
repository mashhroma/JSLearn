import React from "react";
import {Provider } from "react-redux";
import store from "./store";
import ButtonComponent from "./components/ButtonComponent";
import CounterComponent from "./components/CounterComponent";
import ButtonComponentMinus from "./components/ButtonComponentMinus";
// npm i react-redux
// npm i @reduxjs/toolkit

function App() {
  return (
   <Provider store={store}>
    <div>
      <CounterComponent />
      <ButtonComponent />
      <ButtonComponentMinus />
    </div>
   </Provider>
  );
}

export default App;
