// // Exercise 01
// let append=document.querySelector("body")
// console.log(append)

// append.innerText+=" from Vaibhav Chauhan"

// //Exercise 02

    // let divs=document.querySelectorAll("div")
    // console.log(divs);

    // divs[0].innerText=divs[0].innerText+" changes made here on 1st div"
    // divs[1].innerText=divs[1].innerText+"changes made in 2nd "

    //BETTER WAY USING LOOPS

    let divs=document.querySelectorAll(".box")
    let index=0
    for (const idk of divs) {
        idk.innerText=`New unique value ${index}`;
        index++
    }
