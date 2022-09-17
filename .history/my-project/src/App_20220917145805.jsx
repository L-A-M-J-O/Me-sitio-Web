import './App.css';

import About from './components/About/About';
import Home from './components/Home/Home'
import Job from './components/Job/Job';

function App() {
  return (
    <div className="App">
      <Home/>
      <Job/>
      <About/>
    </div>
  );
}

export default App; 
