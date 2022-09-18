import './App.css';

// import About from './components/About/About';
import Home from './components/Home/Home'
import Job from './components/Job/Job';
import Studies from './components/Studies/Studies';
import Projects from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Home/>
       <Job/>
      {/* <About/> */}
      <Studies/>
      <Projects/>
    </div>
  );
}

export default App; 
