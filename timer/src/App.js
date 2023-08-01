

import './App.css';
import ExampleComponent from './components/ExampleComponent';

import {Timer} from './components/Timer';

function App() {

  
  
  return (
    <div className="App">
      
      <Timer intialTime={0} endTime={10}/>
      <ExampleComponent/>
    </div>
  );
}

export default App;
