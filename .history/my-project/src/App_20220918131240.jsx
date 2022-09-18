import './App.css';

import { Route } from 'react-router-dom';
// import About from './components/About/About';
import Home from './components/Home/Home';
import Job from './components/Job/Job';
import Studies from './components/Studies/Studies';
import Project from './components/Project/Project';
import Me from './components/Me/Me';

function App() {
  return (
    <div className="App">
      <Home/>
       <Job/>
       <Me/>
      {/* <About/> */}
      <Studies/>
      <Project/>
    </div>
  );
}

export default App; 
