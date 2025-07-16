let names = "Shivanshu    ";

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.shivanshu = function () {
  console.log("Shivanshu is every where");
};

Array.prototype.rag = function () {
  console.log(" Array is every where ");
};

// names.shivanshu()
// myHeros.shivanshu()
// heroPower.shivanshu()

// names.rag()
// myHeros.rag()
// heroPower.rag()

String.prototype.truelength = function () {
  console.log(this.trim().length);
};

names.truelength();

//  Inheritance
const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

Object.setPrototypeOf(TeachingSupport, Teacher);

///  ====== call ========

function SetUsername(username) {
  //complex DB calls
  this.username = username;
  // console.log("called");
}

function userdetails(username, email, passowrd) {
  SetUsername.call(this, username);
  this.email = email;
  this.passowrd = passowrd;
}

const user1 = new userdetails(" rag ", "rag2@.com", "21334");

// console.log(user1);

//       ======= getter - setter =========

class Users {
  constructor(userName, email, passowrd) {
    this.userName = userName;
    this.email = email;
    this.passowrd = passowrd;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    return (this._email = value);
  }

  get passowrd() {
    return `${this._passowrd}heyshiv`;
  }
  set passowrd(value) {
    return (this._passowrd = value);
  }
}

const user2 = new Users("rag", " rag@.com", 234);
console.log(user2);

console.log(user2.email);
console.log(user2.passowrd);
