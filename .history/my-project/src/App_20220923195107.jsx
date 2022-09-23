import './App.css';

import Home from './components/Home/Home';
import Job from './components/Job/Job'
import Me from './components/Me/Me'

function App() {
  return (
    <div className='main'>
      <Home/>
      <section>
        <Job/>
      </section>
      <Me/>
    </div>


  );
}

export default App; 
