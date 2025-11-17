// let n = 5;
// for (let i = 0; i < n; i++) {
//   console.log(n);
// }

// console.log(process.argv);
let args = process.argv;
for (let i = 2; i < args.length; i++) {
  console.log("Names of arguments:", args[i]);
}
