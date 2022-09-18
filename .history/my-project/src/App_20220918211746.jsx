import './App.css';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Home from './components/Home/Home';

function App() {
  return (
    <Router>
          <div className="App">
              <Home/>
              {/* <Job/>
              <Me/> */}
              {/* <About/> */}
              {/* <Studies/>
              <Project/> */}
        </div>
    </Router>

  );
}

export default App; 
