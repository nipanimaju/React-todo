import React, { useState } from 'react';
import TodoContainer from './components/ToDoContainer';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Help from "./components/Help/Help";
import Impressum from "./components/Impressum/Impressum";
import ToDoDetail from "./components/TodoItem/ToDoDetail";
import ThemeContext from "./context/ThemeContext";
import './App.scss';

function App() {
  const themeStateHook = useState("light");
  return (
    <Router>
      <ThemeContext.Provider value={themeStateHook}>
        <div className={`${themeStateHook[0]}`}>
        <div className="App">
          <Nav />
            <Switch>
              <Route path="/" exact component={TodoContainer} />
              <Route path="/impressum" exact component={Impressum} />
              <Route path="/help" exact component={Help} />
              <Route path="/:id" exact component={ToDoDetail} />
            </Switch>
        </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;