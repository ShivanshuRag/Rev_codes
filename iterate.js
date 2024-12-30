
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

const map = new Map()
map.set("IN" , "INDIA")
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key , value] of map){
    console.log(`this ${key} = ${value}`);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for ( const [key , value] of myObject){
    console.log(` ${key} :- ${value}`);
}
// TypeError: myObject is not iterable