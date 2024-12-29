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