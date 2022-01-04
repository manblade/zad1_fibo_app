import React from 'react';
import { BrowserRouter as  Route, Link } from 'react-router-dom';
import documentation from './Documentation';
import Fib from './Fib';
import logo from './logo.svg'

export default () => {
  return (
    <div>
        <header className = "App-header">
            <img src={logo} className="App-logo" alt="logo" />
            
            Realizacja zadania nr1 w ramach laboratorium PFSwCO
            <p>Marzęda Łukasz</p>
            <br/>
            <Link to="/fibonacci">Fibonacci</Link><br/>
            <Link to="/documentation">Dokumentacja</Link>
            <div>
            <Route path="/fibonacci" component={Fib} />
            <Route path="/documentation" component={documentation} />
            </div>
        </header>
    </div>
  );
};




