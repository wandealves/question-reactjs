import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import RoutesApp from "./routes-app";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <RoutesApp />
      </Router>
    </div>
  );
}

export default App;
