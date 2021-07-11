import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/services">services</Route>
          <Route path="/products">products</Route>
          <Route path="/">home</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
