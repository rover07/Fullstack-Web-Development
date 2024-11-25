
        let modeBtn=document.querySelector("#btn1")
        let currMode="Light";

        let handler1 =() => { 
            if(currMode==="Light")
                {
                    currMode="Dark"
                    document.querySelector("body").classList.remove("Light")
        
                    document.querySelector("body").classList.add("Dark")
                }
            else{
                currMode="Light"
                document.querySelector("body").classList.add("Light")
          document.querySelector("body").classList.remove("Dark")
            }
            // console.log(currMode);
        }

        modeBtn.addEventListener("click",handler1)

