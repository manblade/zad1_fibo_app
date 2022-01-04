import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './Main'
import Fib from './Fib'
import Doku from './Documentation'


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Main} />
        <Route path="/fibonacci" component={Fib}/>
        <Route path="/documentation" component={Doku}/>
      </div>
    </Router>
  );
}

export default App;
