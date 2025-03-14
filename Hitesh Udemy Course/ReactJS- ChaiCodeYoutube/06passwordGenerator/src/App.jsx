import { useState, useCallback, useEffect } from "react";
function App() {
  const [length, setLength] = useState(8);
  // for checkbox, it is in binary: either take number or dont
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [pass, setPass] = useState(""); // we're not giving any default password as we are going to generate it

  // pass generator method
  // number, char are dependencies
  const passGenerator = useCallback(() => {
    let pass = "";
    // str contains data from which pass will be formed
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (numberAllow) str += "!@#$%^&*-_+=[]{}~` ";

    for (let i = 1; i < length; i++) {
      // char represents array's index value
      let index = Math.floor(Math.random() * str.length + 1);
      //There is one problem when generating the random charIndex and that is..

      // Because we are adding 1 to the randomly generated index , there is no possibility of getting a 0 as an index which means that the first char in the str will never get generated
      pass += str.charAt(index);
    }
    setPass(pass);
  }, [length, numberAllow, charAllow, setPass]); // we can ignore setPass here or use pass too. We use it for optimization and memoization
  // Using just "pass" in dependency will cause looping.
  // Any change with dependency will cause in rerunning. The useCallback remembers this
  // The current code means change only if change in setPass but not due to pass

  // // calling this function doesnt work as we dont have control over renders
  // passGenerator();
  useEffect(() => {
    passGenerator();
  }, [length, numberAllow, charAllow, passGenerator]); // callback, dependency arr

  // chatgpt, define useCallback in layman as i didnt understand it
  // chatgpt, define useEffect in layman as i didnt understand it
  return (
    <>
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {" "}
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div flex items-center gap-x-1>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length:{length}</label>
          </div>

          <div className="flex items-center gap-x-1"></div>
          <input
            type="checkbox"
            defaultChecked={charAllow}
            id="charInput"
            onChange={() => {
              setCharAllow((prev) => !prev); // previous is reversed ie. switches from false to true
            }}
          />
          <label htmlFor="numberInput">Characters</label>
          <input
            type="checkbox"
            defaultChecked={numberAllow}
            id="numberInput"
            onChange={() => {
              setNumberAllow((prev) => !prev); // previous is reversed ie. switches from false to true
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
      </div>
    </>
  );
}

export default App;
