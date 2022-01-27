import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AllNotes from "./components/views/AllNotes";
import AddNote from "./components/views/AddNote";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/:username/notes" component={AllNotes} />
        <Route path="/:username/add" component={AddNote} />
      </Switch>
    </Router>
  );
}

export default App;
