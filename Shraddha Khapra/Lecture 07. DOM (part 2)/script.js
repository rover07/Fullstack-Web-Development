
// // getAttribute
    //  let div =document.querySelector("div")
//  let id=div.getAttribute("id")
    //  console.log(id);
    //  let attr=div.getAttribute("class")
    //  console.log(attr);

// // setAttribute
    //  let div =document.querySelector("div")
    //  console.log(div.setAttribute("class","newBox"))


    //  let divs =document.querySelectorAll("div")
    //  console.log(divs.setAttribute("class","newBox"))

// // style attribute
    // let div=document.querySelector("div")
    // div.style.backgroundColor="yellow"
    // div.style.width="50px "
    // div.innerText="changed"
   
    // div.style.visibility="hidden"

// Insert ELements

    // // 1)creating element first
    let newElement=document.createElement("button") // italic created now
    // // adding content to the element created
    // newElement.innerText="click me!"
    // //selecting destination
    // let div=document.querySelector("div")
    // // adding using the following methods
    // div.append(newElement)

    // // adding before outside the selected node
    // let h1=document.createElement("h1")
    // h1.innerText="This is before+outside selected node"
    // let node=document.querySelector("div")
    // node.before(h1)

    // Append Child
    let div=document.querySelector("div")
    div.appendChild(newElement)

// Removing Element
    // let idk=document.querySelector("#UID")
    // idk.remove()