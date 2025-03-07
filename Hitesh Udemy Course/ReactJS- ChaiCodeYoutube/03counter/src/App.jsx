import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // The above is the convention of naming(good practice) variables and using "set" before method, here setCounter
  // setCounter function is responsible for updating counter variable
  // let counter = 15;

  const addValue = () => {
    // In console, the counter value is updated but not in the UI
    console.log("Button Clicked", counter);
    // counter += 1; // naive way of updating
    // way 1
    // counter = counter + 1;
    // setCounter(counter); // Here the react is triggered and the state and UI is synced making changes in both state and UI
    // Way 2
    // setCounter(counter++);

    if (counter <= 20) {
      setCounter(counter++);
    }
  };

  const removeValue = () => {
    console.log("Value reduced", counter);

    if (counter >= 0) {
      setCounter(counter--);

      // while (counter > 10) {
      //   setCounter(counter--);
      //   break;
      // }
    }
  };

  return (
    <>
      <h1>Chai aur React {counter}</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
    </>
  );
}

export default App;
