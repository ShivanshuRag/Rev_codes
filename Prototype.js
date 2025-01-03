let names = "Shivanshu    "

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.shivanshu = function(){
    console.log("Shivanshu is every where");
}

 Array.prototype.rag = function(){
  console.log(" Array is every where ");
 }



// names.shivanshu()
// myHeros.shivanshu()
// heroPower.shivanshu()

// names.rag()
// myHeros.rag()
// heroPower.rag()

String.prototype.truelength = function( ){
    console.log( this.trim().length);
  }

  names.truelength()

//  Inheritance
  const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}


Object.setPrototypeOf(TeachingSupport ,Teacher)