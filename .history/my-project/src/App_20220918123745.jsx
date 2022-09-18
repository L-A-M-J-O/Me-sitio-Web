import './App.css';

// import About from './components/About/About';
import Home from './components/Home/Home'
import Job from './components/Job/Job';
import Studies from './components/Studies/Studies';

function App() {
  return (
    <div className="App">
      <Home/>
       <Job/>
      {/* <About/> */}
      <Studies/>
    </div>
  );
}

export default App; 
