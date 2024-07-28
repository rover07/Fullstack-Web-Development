// function myFunction(a) {
//     console.log("HI there");
//     console.log(a+77);
// }

// myFunction(10)



// // arrow funcion

// const arrFxn =()=>{

//     console.log("Inside arrow function");
// }

// console.log(arrFxn());


// // // // practice Q1
// function countVowel(str)
// {
//     let count=0;
//     for (const char of str) {
//        if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u") 
//        {
//         count++;
//        }
//     }
//     console.log(count);
// }

// let str;

// countVowel(prompt(str));

// same question using arr fxn


// countVowel=(str) => { 
// let count=0;
//     for (const char of str) {
//         if(char==="a" || char==="e" ||char==="i" ||char==="o" ||char==="u" )

//         {
//             count++
//         }
//     }
// //   return count;
//     console.log(count);
//  }



// // // // // METHODS
let arr = [1, 2, 3, 4, 5]
//  arr.forEach(function printVal(val){
//     console.log(val);
//  });


arr.forEach((val) => {
    console.log(val);
})