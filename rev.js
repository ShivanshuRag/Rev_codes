
//  one = 10


// console.log(one);
//  let one ;

const one = ()=> Promise.resolve("one")
 

async function two(){
    console.log("two");
    const result = await one() // agar await lagta hai to aync nature , go into micro task, agar await nhi lagtae hai to call stack se hi execute ho jayega
    console.log(result);
}

console.log("start");
two()

console.log("end");