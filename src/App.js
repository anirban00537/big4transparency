import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />

        {/* <Route exact path="/your/room/:id" component={YourRoom} /> */}
      </Switch>
    </Router>
  );
}

export default App;
