const URL="https://cat-fact.herokuapp.com/facts"
const factPara=document.querySelector("#fact")
const btn=document.querySelector("#btn")


 

// let promise=fetch(URL)
// console.log(promise);


// // // Using Async await #Better way
// const getFacts = async () => { 
//     console.log("getting data ..... ");
//     let response=await fetch(URL);
//     //Get request
//     // console.log(response.status);
//     console.log(response); 
//     let data = await response.json(); //JSON format 
//     // console.log(data[0].text);
//     factPara.innerText=data[0].text
// };


// // // Using Promise API- Another way
function getFacts(){
    fetch(URL)

}

// console.log (getFacts());

btn.addEventListener("click",getFacts)
