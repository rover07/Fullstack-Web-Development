// // // #1 JSON -> JS Object
// let jsonResponse =
//   '{"fact":"Every year, nearly four million cats are eaten in Asia.","length":55}';

// let validResponse1 = JSON.parse(jsonResponse);
// console.log(validResponse1);
// console.log(validResponse1.fact);

// // // #2 JS Object -> JSON
// let objResponse = {
//   name: "rover",
//   age: 19,
//   salary: 100000,
// };

// let validResponse2 = JSON.stringify(objResponse);
// console.log(validResponse2);

//
// // // using Fetch for request (Using Promises)
// let url = "https://catfact.ninja/fact";

// fetch(url) // Returns a promise
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log("data 1:", data);
//     console.log("fact 1:", data.fact);
//     return fetch(url);
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data2) => {
//     console.log("data 2:", data2);
//     console.log("fact 2:", data2.fact);
//   })

//   .catch((err) => {
//     console.log("error occurred:", err);
//   });

//
//
// // // using Fetch for request (Using Async/await)
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let response = await fetch(url);
//     let data = await response.json();
//     console.log(data.fact);

//     let response2 = await fetch(url);
//     let data2 = await response2.json();
//     console.log(data2.fact);
//   } catch (error) {
//     console.log("Error-", error);
//   }
// }

//getFacts(); use this in console to print

// // // HTTP requests using Axios
let url = "https://catfact.ninja/fact";
let btn = document.querySelector("#catBtn");
let p = document.querySelector("#result");

btn.addEventListener("click", async () => {
  let fact = await getFacts();
  console.log(fact);

  p.innerText = fact;
});

async function getFacts() {
  try {
    let response = await axios.get(url);
    return response.data.fact;
  } catch (error) {
    console.log("error occurred:", error);
    return "NO fact found!!!";
  }
}

//
// // // Dog images on screen
//
let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#dogBtn");
let dogImg = document.querySelector("#dogImg");

btn2.addEventListener("click", async () => {
  let link = await getImage();
  console.log(link);
  dogImg.setAttribute("src", link);
});

async function getImage() {
  try {
    let res = await axios.get(url2);
    return res.data.message;
    // return res.data;
  } catch (e) {
    console.log("error occurred:", e);
    return "NO image found!!!";
  }
}
