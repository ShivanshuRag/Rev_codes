// OBject 

const mySym = Symbol("key1")
const obj ={

    name: "Shiavanshu",
    "fullname": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    greeting : function(){
        console.log("Hello JS user");
    }
}
// console.log(obj.fullname); ase bhi kar sakte hai 

console.log(obj["age"])
 // ase bhi kar skte h bcz its best practice to access key 

 

 

/* 
  console.log(obj[greeting()]);

  lekin method ko ase nhi acccess kr skte 


   console.log(obj.greeting()); ase kar sakte hai
  
  */


   obj.email = "hitesh@chatgpt.com"
// Object.freeze(obj)

 obj.email = "hitesh@microsoft.com"
// console.log(obj);

// ======================

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }

const obj3 = Object.assign({}, obj1, obj2, obj4)
console.log(obj3); 


// output- { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj5 = {...obj1, ...obj2 , ...obj4} // destructure

// output - { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }