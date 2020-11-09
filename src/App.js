
import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import ListGame from './components/ListGame';

function App() {
  return (
    <div className="App">
   Game-app
   <Switch>
     <Route exact path="/" component={ListGame}/>
   </Switch>
    </div>
  );
}

export default App;
