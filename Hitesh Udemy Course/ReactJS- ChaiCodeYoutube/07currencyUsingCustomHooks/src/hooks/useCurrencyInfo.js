//src/hooks/useCurrencyInfo.js


// good practice: name the file .jsx when we return .jsx and .js when returning .js
import { useEffect, useState } from 'react';
// naming convention of hooks: start naming from use Eg.useHookName
function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //default: empty obj
  // out goal is to call the api only when the user invokes it thats why we are using the below hook
  // when any component is mount or component's lifecycle is triggered,(useEffect()) this method  will call fetch api
  useEffect(() => {
    // useEffect should be called when the value of currency is changed so currency is a dependency
    //    react query handles the string to json conversion automatically
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    // response mein jo bhi key==currency as input aya usko lelia isne
    // tell me why holding the url in a variable , why it wont be updated in the UI
    console.log(data);
  }, [currency]);
  console.log(data);

  //Chatgpt tell me this way of parsing string to json: Capital json.parse.......
  //return [data, setData]; // chatgpt tell me why are we returning only data instead of this at this place. Also tell me why using [data, setData] will not allow us to access (currency). What i feel is that at the use state inititlization place, if the value in ise state {} wont be empty after returning so the code inside useEffect wont be read.
  // the entire useState method is returned entirely 

  return data;
}

export default useCurrencyInfo;
// we designed a functionality and returned the function entirely
