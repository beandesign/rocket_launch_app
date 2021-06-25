import Home from './Pages/Home';
import Past from './Pages/Past';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="content">
      <Router>
        <Switch>
          <Route path="/past">
            <Past />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
