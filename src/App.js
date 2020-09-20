import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MapView from "./components/MapView";
import './App.css'
import Home from "./components/Home";

function App() {
  return (
   
    <Router>
      <Switch>
      <Route path="/map-view">
          <MapView />;
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
