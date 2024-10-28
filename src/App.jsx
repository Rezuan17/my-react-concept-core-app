import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Home from './home';
import Device from './device';
import Student from './new';
import Task from './more';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

     


     {/* <Home></Home> */}

     {/* <Device name="Laptop" price={55000}></Device>
     <Device name="Phone" price={45000}></Device>
       */}
{/* 
      <Student name="Rezuan" roll={248889} id="11" session="Science"></Student>
      <Student name="Lotifur" roll={248890} id="12" session="Arts"></Student>
      <Student name="Atiur" roll={248891} id="13" session="Comarts"></Student> 
      */}



      <Task name='learn react js codding' isDone={true}></Task>
      <Task name='learn react js core concepts' isDone={false}></Task>
      <Task name='learn react js Redux' isDone={true}></Task>
    </>
  );
}

export default App;
