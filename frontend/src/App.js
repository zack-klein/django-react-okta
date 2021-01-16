import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import ReceiveToken from "./pages/ReceiveToken";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/users" component={Users} />
          <Route path="/token/receive" component={ReceiveToken} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
