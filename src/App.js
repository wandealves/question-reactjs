import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Configuration from "./components/Configuration";
import Questions from "./components/Questions";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/configurations">
            <Configuration />
          </Route>
          <Route path="/questions">
            <Questions />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
