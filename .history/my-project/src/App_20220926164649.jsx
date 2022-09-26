import './App.css';

import Home from './components/Home/Home';
import Job from './components/Job/Job';
import Me from './components/Me/Me';
import Projects from './components/Project/Project';

function App() {
  return (
    <div className='main'>
      <Home/>
        <Job/>
        <Me/>
        <Skills/>
      {/* <Projects/> */}
    </div>


  );
}

export default App; 
