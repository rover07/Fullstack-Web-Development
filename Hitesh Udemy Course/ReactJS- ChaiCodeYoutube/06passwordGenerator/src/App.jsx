import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [length, setLength] = useState(8);
  // for checkbox, it is in binary/boolean: either take number or dont
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState(""); // we're not giving any default password as we are going to generate it
  // console.log("🚀 ~ App ~ setPass:", setPass)

  // pass generator method
  // number, char are dependencies
  const passwordGenerator = useCallback(() => {
    let pass = "";
    // str contains data from which pass will be formed
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*-_+=[]{}~` ";

    for (let i = 1; i < length; i++) {
      // char represents array's index value
      let charIndex = Math.floor(Math.random() * str.length + 1);
      //There is one problem when generating the random charIndex and that is..

      // Because we are adding 1 to the randomly generated index , there is no possibility of getting a 0 as an index which means that the first char in the str will never get generated
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword]); // we can ignore setPassword here or use "password" too. We use it for optimization and memoization
  // Using just "password" in dependency will cause looping.
  // Any change with dependency will cause in rerunning. The useCallback remembers this
  // The current code means change only if change in setPass but not due to pass

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // this selects the password
    // ?== optional selection, we do this as the input field might be empty, in that case the selection will not be done otherwise there will be ghost selection
    passwordRef.current?.setSelectionRange(0, 3); // only the range part will be selected
    // this highlights the password and below line code actually copies
    window.navigator.clipboard.writeText(password);
  }, [password]); // when this function is called using event onClick, the value of password is copied in clipboard
  // now, we have taken useRef so we can highlight the copied text

  // useEffect vs useCallback
  // // useEffect deals with any changes with its dependencies leads to rerunning
  // // useCallback optimizes methods of dependencies

  // // calling this function doesnt work as we dont have control over renders
  // passGenerator();
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator]); // callback, dependency arr

  //
  // for taking a reference
  const passwordRef = useRef(null); //pass it at any input field ie. in html, we have to use "ref={passwordRef}"

  // chatgpt, define useCallback in layman as i didnt understand it
  // chatgpt, define useEffect in layman as i didnt understand it
  return (
    <>
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-amber-50"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
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
                setLength(e.target.value); //When the user moves the slider, onChange runs and updates length using setLength(e.target.value).
                //When the user moves the slider, the `onChange` event triggers, capturing the new value from the input (`e.target.value`), and `setLength` updates the `length` state with this value.
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
