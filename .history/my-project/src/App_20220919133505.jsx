import './App.css';

import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
          <div className="App">
              <Navbar/>
        </div>
  );
}

export default App; 
