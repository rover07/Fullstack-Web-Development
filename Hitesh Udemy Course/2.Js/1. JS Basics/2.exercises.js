// let teaTypes = ["herbel tea", "white tea", "masala chai"];
// teaTypes[2] = "matcha tea";

// console.log(teaTypes);

// let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited.push("Berlin");
// console.log(citiesVisited);

// let popularTeas = ["green tea", "oolong tea", "chai"];
// let softCopyTeas = popularTeas;
// popularTeas.pop();
// console.log(softCopyTeas);

// let topCities = ["Berlin", "Singapore", "New York"];
// // let hardCopyCities = [...topCities];
// let hardCopyCities = topCities.slice();
// // topCities.pop();
// console.log(hardCopyCities);

let arr = ["Berlin", "tokyo", "Sydney", "paris"];
let newArr = [];
arr.forEach((city) => {
  if (city == "Sydney") {
    return;
  }
  newArr.push(city);
});

console.log(newArr);
