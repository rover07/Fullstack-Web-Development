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

// 1. forEach
// 
// 
// let arr = [1, 2, 3, 4, 5]
// //  arr.forEach(function printVal(val){
// //     console.log(val);
// //  });


// arr.forEach((val, idx, arr) => {
//     console.log(val, idx, arr[2]);
// })

// Q1: 

// let arr = [1, 2, 3, 4, 5]
// arr.forEach((val) => {
//     let sqr = val * val;
//     console.log(sqr);
// });
// 

// 2. Map

// let arr = [1, 2, 3, 4, 5]
// arr.map((val) => {
//     console.log(val + 1);
// })
// console.log(arr);


// let ans = arr.map((val) => {
//     return val ** 2;
// })
// console.log(ans);

// 3.Filter

// let arr = [1, 2, 3, 4, 5, 4]
// let ans = arr.filter((val) => {
//     // return val % 2 == 0;
//     return val > 3;
// })
// console.log(ans);

// 4. Reduce
// let arr = [1, 2, 8, 4, 5]

// let ans = arr.reduce((result, current) => {
//     return result + current;
// })
// console.log(ans);

// Q: largest
// let ans = arr.reduce((result, current) => {
// if (result > current) {
//     current = result;
// }
// return current;

//better way
//     return result > current ? result : current
// })
// console.log(ans);

// Q:
let n = prompt("enter a number!")

let arr = []
for (let i = 0; i < n; i++) {
    arr[i] = i + 1;
}

let sum = arr.reduce((result, curr) => {
    return result + curr
})
let factorial = arr.reduce((result, curr) => {
    return result * curr
})
console.log(sum);
console.log(factorial);