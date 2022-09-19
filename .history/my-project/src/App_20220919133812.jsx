import './App.css';

import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
} from "react-router-dom";


function App() {
  return (
    <Router>
                <Navbar/>
        <BrowserRouter>
        </BrowserRouter>
    </Router>

  );
}

export default App; 
