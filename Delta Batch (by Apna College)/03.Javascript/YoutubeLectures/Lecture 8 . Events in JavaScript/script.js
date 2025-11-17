let btn1=document.querySelector("#buttonHandledOutsideHTML");


// btn1.onmouseover =() => { 
//     console.log("Mouseover hua hai")
//  };

//  // // // Event Objects
// btn1.onclick =(event)=>{
//     // console.log(event)
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.clientX);
//     console.log(event.clientY );
//     console.log(event.clientX,event.clientY );
// }


// // //Event Listeners
    // Adding
    // btn1.addEventListener("mouseover ",() => {  
    //     console.log("Button was clicked by hand;er 1");
    // })

    // btn1.addEventListener("click",(evnt) => { 
    //     console.log("Button was clicked by handler 2");
    //     console.log(evnt);
    // })
    // Removing 
        //check notes for best practices
        //1 store in variable
        let handler1=() => {  
            console.log("Button was hovered by hander 1");}
        //2 adding event listener
        btn1.addEventListener("mouseover",handler1)
    
        btn1.addEventListener("click",(evnt) => { 
            console.log("Button was clicked by handler 2");
            console.log(evnt);
        })
        // 3. removing handler 1
        btn1.removeEventListener("mouseover",handler1)