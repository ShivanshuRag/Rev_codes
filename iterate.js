/* array , string , map pr (for of ) iteration is works */

//  for of

// ["" , "", ""]
// [{},{},{}]

//  const arr1 = ["abc" ,"def" , "ghi"]

//  for (const iter of arr1){
//     console.log(iter);
//  }

//  const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

const map = new Map();
map.set("IN", "INDIA");
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const [key, value] of map) {
  // console.log(`this ${key} = ${value}`);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for ( const [key , value] of myObject){
//     // console.log(` ${key} :- ${value}`);
// }
// TypeError: myObject is not iterable

// +++++++++++++++++++++++++++++++++

/* Obeject , Arrays ,Strings  */

//   for in

/*
 const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject1) {
    // console.log(`${key} shortcut is for ${myObject1[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}


 const greeting = "Hello world!"
for (const greet in greeting) {
    console.log(`Each char is ${greeting[greet]}`)
}

*/

// +++++++++++++++++++++++++++++++++

//   forEach

const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach((a) => {
  // console.log(a);
});

function printme(item) {
  //   console.log(item);
}

coding.forEach(printme);

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 4;
});
// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((item) => item.genre === "Science");

//   console.log(mybook);
userBooks = books.filter((bk) => {
  return bk.publish >= 1995 && bk.genre === "History";
});
//   console.log(userBooks);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.map((num) => {
  return num + 10;
});
// console.log(newNum);

const myNumer = [1, 2, 3];

const num = myNumer.reduce((acc, currval) => acc + currval);

console.log(num);
