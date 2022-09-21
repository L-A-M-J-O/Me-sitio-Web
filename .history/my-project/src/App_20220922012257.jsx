import './App.css';

import Home from './components/Home/Home';
import Job from './components/Job/Job'
import Me from './components/Me/Me'

function App() {
  return (
    <div className='main'>
      <h2>Custom scroll</h2>
      <Home/>
      {/* <Job/> */}
      <Me/>
    </div>


  );
}

export default App; 
