import './App.css';

import Home from './components/Home/Home';
import Job from './components/Job/Job'
import Me from './components/Me/Me'
import Projects from './components/Project/Project'
import Studies from './components/Studies/Studies'
import S from './components/S/S';

function App() {
  return (
    <div className='main'>
      <S/>
      <Home/>
      <section>
        <Job/>
      </section>
      <Me/>
      <Projects/>
    </div>


  );
}

export default App; 
