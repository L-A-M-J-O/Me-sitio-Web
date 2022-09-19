import './App.css';

import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Switch>
          <Navbar/>
          <Route path="/about">
          </Route>
          <Route path="/topics">
          </Route>
          <Route path="/">
          </Route>
        </Switch>
    </Router>

  );
}

export default App; 
