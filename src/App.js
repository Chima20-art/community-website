import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home/home";
import Services from "./services/services";
import Annex from "./annex/annex";
import Product from "./products/products";
import Technology from "./technology/technology";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/product" component={Product} />
          <Route path="/technology" component={Technology} />
        </Switch>
        <Annex />
      </div>
    </Router>
  );
}

export default App;
