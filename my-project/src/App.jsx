import './App.css';

import Home from './components/Home/Home';
import Job from './components/Job/Job';
import Me from './components/Me/Me';
import Skills from './components/Skills/Skills'
import Projects from './components/Project/Project';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='main'>
      <Home/>
      <Projects/>
      <Job/>
      <Me/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App; 
