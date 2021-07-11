import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesApp from "./routes-app";

function App() {
  return (
    <div>
      <Router>
        <div className="flex flex-col h-screen justify-between">
          <Header />
          <RoutesApp />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
