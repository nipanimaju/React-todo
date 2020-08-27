import React from 'react';
import TodoContainer from './components/ToDoContainer';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Help from "./components/Help"
import Impressum from "./components/Impressum";
import Footer from "./components/Footer"
import './App.scss';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
          <Switch>
            <Route path="/" exact component={TodoContainer} />
            <Route path="/impressum" exact component={Impressum} />
            <Route path="/help" exact component={Help} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;