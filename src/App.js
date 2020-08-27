import React from 'react';
import TodoContainer from './components/ToDoContainer';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Help from "./components/Help/Help"
import Impressum from "./components/Impressum/Impressum";
import Footer from "./components/Footer/Footer"
import ToDoDetail from "./components/TodoItem/ToDoDetail"
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
            <Route path="/:id" exact component={ToDoDetail} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;