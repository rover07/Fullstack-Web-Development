import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        //this is how we write inline css in react
        style={{ backgroundColor: color }} // as this already had dounle {}, no need to mention again for variable
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
            <button
              onClick={() => setColor("red")}
              //using just  onClick={setColor} without parenthesis but onClick expects a function and this is just a reference, but writing this way; we wont be able to pass parameter. Its just the syntax because of which we can pass the parameter
              // onClick expects a function, not what the function returns:        onClick={ setColor("red")}
              // So thats why we make use of callback to deal with this issue
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>{" "}
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
// IMPORTANT TAKE AWAY FROM VIDEO
// The on click method in React expects a function reference
// You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax
