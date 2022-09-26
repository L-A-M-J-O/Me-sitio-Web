import './App.css';

import Home from './components/Home/Home';
import Job from './components/Job/Job'
import Me from './components/Me/Me'
import Projects from './components/Project/Project'
import Studies from './components/Studies/Studies'

function App() {
  return (
    <div className='main'>
      <Home/>
      <section>
        <Job/>
      </section>
      <Me/>
      <Projects/>
      <Studies/>
    </div>


  );
}

export default App; 