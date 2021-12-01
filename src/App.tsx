
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Benchmarks from "./Components/Benchmarks/Benchmarks";
import Result from "./Pages/Result";
import Step1 from "./Pages/Step1";

import Step2 from "./Pages/Step2";
import Step3 from "./Pages/Step3";



function App() {

  return (
  
  <BrowserRouter>
  <Switch>
    <Route exact path='/step1'><Step1/></Route>
    <Route exact path='/step2'><Step2/></Route>
    <Route exact path='/step3'><Step3/></Route>
    <Route exact path='/result'><Result /></Route>
    <Route path='/'><Benchmarks /></Route>
  </Switch>
  </BrowserRouter>
  
  );
  
 
}

export default App;
