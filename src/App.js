import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home/home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services">jksc</Route>
          <Route path="/products">products</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
