// // alert("Alert ")
// // prompt("Hi")
// //  console.log(window)

// console.log(document.body)

// document.body.style.background="red"
 
// document.body.childNodes[1].innerText="abcd"


// // //Selecting/Accessing Content
// // // // #1. by id
// let idk =document.getElementById("1")
// console.log(idk)

// // // //#2. By class
// console.log(document.getElementsByClassName("heading"))
// console.dir(document.getElementsByClassName("heading"))

// // // #3. By Tag Names
    // console.log(document.getElementsByTagName("p"))

// // // #4. Query Selector

    // single query selector
    // console.log(document.querySelector("p"));
    // all query selector
    //   console.log(document.querySelectorAll("p"));


    // // //  DOM manipulation properties 

        //getting values
        
            // //tagName
            // let firstElement=document.querySelector("p");
            // console.log(firstElement); // better store in variable so we can use property over it
            // console.log(document.querySelector("p").tagName)
            // // or
            // console.log(firstElement.tagName)

            // // //innerText
            // // // console.log(firstElement.innerText)
            // console.log(document.querySelector("div").innerText)


            // // //innerHTML
            // console.log(document.querySelector("div").innerHTML)

            //textContent

            // console.log(document.querySelector("div").textContent) //even displays hidden content
                        

            //more properties 
            // console.log(document.querySelector("div").firstChild);
            // console.log(document.querySelector("p").firstChild);
            // console.log(document.querySelector("p").childNodes);


            // // Homework Problem
            // console.log(document.querySelector("body").firstChild);
            // console.log(document.querySelector("body").lastChild);

            // console.log(document.querySelector("div").children);


        // setting values
            
            // console.log(document.querySelector("div").innerText="abcd");
            // storing the above is better so I dont have to write entire stuff again
            let div=document.querySelector("div")
            console.log(div);

            div.tagName="<></"
        
            // div.innerHTML="<b>Bold Text</b>"    //now ill make these changes over this in browser