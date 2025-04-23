// //  one = 10

// // console.log(one);
// //  let one ;

// const one = ()=> Promise.resolve("one")

// // async function two(){
// //     console.log("two");
// //     const result = await one() // agar await lagta hai to aync nature , go into micro task, agar await nhi lagtae hai to call stack se hi execute ho jayega
// //     console.log(result);
// //  }

// // console.log("start");
// // two()

// // console.log("end");

// function highOrder( func , arg){
//    return func(arg)
// }
// // console.log(highOrder(Math.sqrt , 16));

//  function outerfunc (){
//     const outervar = 'this is outer variable'

//     function innerfunc(){
//         console.log(outervar);
//     }

//     return innerfunc
//  }

//  const closure = outerfunc()
//   closure();

// ;(function() {
//     // Private variables and functions
//     const name = 'John';
//     function sayHello() {
//       // console.log('Hello, ' + name + '!');
//     }

//     // Public functions
//     function greet() {
//       console.log('Hello, world!');
//     }
//   })();

//   // let a = 10
//   // let b = a ;

//     a = 20

//       // console.log(b);

//       let arr = [ 1, 2 ,3, 4,5,]

//       let newRR = arr

//       arr.push(6)

// console.log(newRR);

// let a = 5;
// let b = 5;

// // console.log(a == b); // Output: true
// // console.log(a === b); // Output: true

// a = "5";
// b = 5;

// console.log(a == b); // Output: true
// console.log(a === b); //false

// callback funct

// function readFile ( filename , callback){
//    fs.readFile(filename , 'utf8', (err , data)=>{
//       if(err) return callback()
//         callback(null,data)
//    })

// }

//  readFile('indexedDB.jsx' , (err , data)=>{
//     if( err) throw err
//     console.log(data);
//  })

//  setTimeout(()=>{
//    console.log('helllo');
//  },1000)

//  function sum (...num){
//   return num.reduce((prev , curr)=> prev + curr , 0)
//  }

//  console.log(sum(1 , 23, 4));

// add two promises
// async function addPromises() {
//       try {
//         const promise1 = Promise.resolve(10); // Resolves to 10
//         const promise2 = Promise.resolve(20); // Resolves to 20

//         const [result1, result2] = await Promise.all([promise1, promise2]);
//         const sum = result1 + result2; // Add the results
//         console.log("Sum:", sum); // Output: Sum: 30
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }

//     addPromises();

//  Sleep

// function sleep(millis) {
//       return new Promise((resolve) => {
//         setTimeout(resolve, millis);
//       });
//     }

//     // Test case
//     async function testSleep() {
//       const t = Date.now(); // Record the start time
//       await sleep(100); // Sleep for 100 milliseconds
//       console.log(Date.now() - t); // Output: ~100 (time taken to sleep)
//     }

//     testSleep();

// const a = 18;
// const b = 24;

// function increment() {
//   // increment value a by 1
//   return a + 1;
// }

// console.log(increment()); // accepted output is 19 when incrementt by 1

// Addition of two values
// function add() {
//   return a + b;
// }
// console.log(add());
// let count = 0;
// let vowel = "aeiouAEIOU";

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < vowel.length; j++) {
//     if (str[i] == vowel[j]) {
//       count++;
//     }
//   }
// }

// return count;
// }

// function countVowels(str) {

// console.log(countVowels("RAM"));

//

function outer() {
  function inner() {
    return `Inner function called`;
  }

  return inner();
}

// console.log(outer());

let computer = { cpu: 30 };
let mac = {
  ram: 32,
  __proto__: computer,
};

// console.log(`computer`, mac.__proto__);
let car = { tyers: 4, handle: 1 };
let mercede = { model: "G-Wagon" };

Object.setPrototypeOf(mercede, car);

// console.log("mercede", Object.getPrototypeOf(mercede));

class vehicle {
  constructor(brand, model, date) {
    this.brand = brand;
    this.model = model;
    this.date = date;
  }

  start() {
    return ` this car is name ${this.brand} ${this.model} start in ${this.date}`;
  }
}

let car1 = new vehicle("mercede", " G-wagon", 2025);

// console.log(car1.start());

class truck extends vehicle {
  run() {
    return ` this truck is name ${this.brand} ${this.model} start in ${this.date}`;
  }
}

let truck1 = new truck(" TATA", "YODHA", 2024);

// console.log(truck1.run());

class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }

  // Getter for balance
  get balance() {
    return this._balance;
  }

  // Setter for balance to prevent negative values
  set balance(value) {
    if (value < 0) {
      this._balance = 0;
    } else {
      this._balance = value;
    }
  }

  deposit(amount) {
    this.balance += amount; // Uses the setter to update balance
  }

  withdraw(amount) {
    if (this.balance < amount) {
      console.log("Insuffient balance");
      return;
    }
    this.balance -= amount; // Uses the setter to ensure non-negative balance
  }
}

let bank1 = new BankAccount(100);

bank1.deposit(50);
bank1.withdraw(160);

// console.log(bank1.balance);

//  Genrator and  Iterator

function* helloGuy() {
  yield `I am first time Calling`;
  yield `I am second time Calling`;
  yield `I am third time Calling`;
}

let gen = helloGuy();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
