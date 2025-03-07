import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "rover",
    age: 21,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card username="chaiaurcode" someObj={myObj} someArr={newArr} />
      // Here we used {} because as per createElement, we followed a order to
      write and at this order we ensure that the value is variable and enclose
      it in {}
      // This doesnt take array or object in place ,so we created myObj above
      and used it here // By this we can pass value from one component to
      another
      <Card username="hitesh choudhary" price="Free/No Price" />
    </>
  );
}

export default App;
