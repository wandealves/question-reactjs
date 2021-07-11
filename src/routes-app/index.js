import { Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import Configuration from "../components/Configuration";
import Questions from "../components/Questions";
import NotFound from "../components/NotFound";

function RoutesApp() {
  return (
    <>
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default RoutesApp;
