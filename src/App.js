import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Component/NavBar';
import Content from './Component/Data/Content'
import Them from './Them/Them';

function App() {
  return (
    <Router>
    <NavBar/>
    <Content/>
    {/* <Them/> */}
    <Switch>
      
    </Switch>
    </Router>
  );
}

export default App;
