
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

      let a = 5;
      let b = 5;

console.log(a == b); // Output: true
console.log(a === b); // Output: true

a = '5';
b =  5;

console.log(a == b); // Output: false
console.log(a === b);


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


function sleep(millis) {
      return new Promise((resolve) => {
        setTimeout(resolve, millis);
      });
    }
    
    // Test case
    async function testSleep() {
      const t = Date.now(); // Record the start time
      await sleep(100); // Sleep for 100 milliseconds
      console.log(Date.now() - t); // Output: ~100 (time taken to sleep)
    }
    
    testSleep();

  