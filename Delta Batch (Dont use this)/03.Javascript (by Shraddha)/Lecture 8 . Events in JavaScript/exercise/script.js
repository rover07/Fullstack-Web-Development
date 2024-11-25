// // dark mode - light mode
// // // #here we are making changer over entire body as we have to invert font color for every <p> so changing color for entire body is non repetetive and one time job

/////// USING Style Attribute
        
    // let modeBtn=document.querySelector("#btn1")
    // let currMode="Light";

    // let handler1 =() => { 
    //     if(currMode==="Light")
    //         {
    //             currMode="Dark"
    //             document.querySelector("body").style.backgroundColor="Black"
    //         }
    //     else{
    //         currMode="Light"
    //         document.querySelector("body").style.backgroundColor="white"
    //     }
    //     // console.log(currMode);
    // }

    // modeBtn.addEventListener("click",handler1)

// // // USING ClassList

        // let modeBtn=document.querySelector("#btn1")
        // let currMode="Light";

        // let handler1 =() => { 
        //     if(currMode==="Light")
        //         {
        //             currMode="Dark"
        //             document.querySelector("body").classList.remove("Light")
        
        //             document.querySelector("body").classList.add("Dark")
        //         }
        //     else{
        //         currMode="Light"
        //         document.querySelector("body").classList.add("Light")
  //         document.querySelector("body").classList.remove("Dark")
        //     }
        //     // console.log(currMode);
        // }

        // modeBtn.addEventListener("click",handler1)


// // // USING set/getAttribute
        let modeBtn=document.querySelector("#btn1")
        let currMode="Light";

        let handler1 =() => { 
            if(currMode==="Light")
                {
                    currMode="Dark"
                    document.querySelector("body").getAttribute("class")
                    document.querySelector("body").setAttribute("class","Dark")

                }
            else{
                currMode="Light"
                document.querySelector("body").getAttribute("class")
                document.querySelector("body").setAttribute("class","Light")
            }
        }

        modeBtn.addEventListener("click",handler1)


