import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10)

  const addValue = () => {
    if (counter >= 0 & counter <= 19){
      setCounter(counter + 1)
    }
    
  }
  const removeValue = () => {
    if (counter >= 1 & counter <= 20){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Counter project</h1>
      <p>Counter:- {counter}</p>

      <button onClick={addValue}>add value:- {counter}</button>
      <button onClick={removeValue}>remove value:- {counter}</button>
      <p>final value:- {counter}</p>
      
    </>
  );
}

export default App;
