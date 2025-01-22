
//  one = 10


// console.log(one);
//  let one ;

const one = ()=> Promise.resolve("one")
 

// async function two(){
//     console.log("two");
//     const result = await one() // agar await lagta hai to aync nature , go into micro task, agar await nhi lagtae hai to call stack se hi execute ho jayega
//     console.log(result);
//  }

// console.log("start");
// two()

// console.log("end");


function highOrder( func , arg){
   return func(arg)
}
console.log(highOrder(Math.sqrt , 16)); 


 function outerfunc (){
    const outervar = 'this is outer variable'

    function innerfunc(){
        console.log(outervar);
    }

    return innerfunc
 }

 const closure = outerfunc()
  closure();



;(function() {
    // Private variables and functions
    const name = 'John';
    function sayHello() {
      console.log('Hello, ' + name + '!');
    }
  
    // Public functions
    function greet() {
      console.log('Hello, world!');
    }
  })();