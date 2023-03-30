// import { useState } from "react";
import React from 'react';
// import reactLogo from "./assets/react.svg";
import './App.css';
// import Rates from "./components/AllTabs/Rates";
// import Conversion from "./components/AllTabs/Conversion";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {  Link } from "react-router-dom";
import Tabs from './components/TabComponent/Tabs';

function App() {
  return (
    <div className="container justify-content-center">
      <Tabs />
    </div>
  );
}

export default App;
