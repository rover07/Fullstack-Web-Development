//src/components/InputBox.jsx
// This here is a component that is reusable
import React, { useId } from 'react';

function InputBox({
  // these are the inputs that this component takes
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '', // style from user
}) {
  const amountInputId = useId();
  return (
    // this is written in {``} as we might be taking styles from user and ${className} is where the user style will be gained
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      {' '}
      <div className="w-1/2">
        <label
          htmlFor="{amountInputId}"
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId} // used for binding ids with labels
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            // here the first one checks the availability and second actually changes amount
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          // e → The event object (captures what happened).

          //target → The element that triggered the event (e.g., an <input>).

          //value → The actual data inside the input field.
          // converting to number; as JS might take default amount in String format
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          {currencyOptions.map((currency) => (
            // use "{}" if we want to return something else make use of "()"
            <option key={currency} value={currency}>
              {currency}
            </option>

            // When we use the below line, the same value is repeated multiple times. React doesnt diagnose this issue and faces performance issues
            //<option  value=usd>usd</option>
            // while repeating elements in a loop, we lose performance. To fix this we pass "key"
      //always pass key in jsx while looping
      // chatGpt tell me why is key used here
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
// I have imported this component in index.js which is a primary source from which the components are accessed

// What are accessibility attributes in html
// explain useId Hook
