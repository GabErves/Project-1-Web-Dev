import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Rates from './components/AllTabs/Rates'
import Conversion from './components/AllTabs/Conversion'
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {  Link } from "react-router-dom";
import Tabs from './components/TabComponent/Tabs'



function App() {
  

  return (
   <div className='container justify-content-center'>
   <Tabs/>

   {/* <Router>
    <Nav/>
    <Switch>
      <Route path="/conversion" component={Conversion}/>
      <Route path="/rates" component={Rates}/>
    </Switch>
   </Router> */}
   {/* <Conversion/>
   <Rates/> */}
   {/* {tab=="Rates" && <Rates></Rates>}
   {tab=="Conversions" && <Conversion></Conversion>} */}
   </div>
  )
}

export default App
