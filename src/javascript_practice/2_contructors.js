class User {
  constructor(first, last, e) {
    this.f = first;
    this.l = last;
    this.email = e;
  }
}

var userOne = new User("Paul", "O'conor", "poconnor@elevenfifty.org");
console.log(userOne.firts); //undefined
console.log(userOne.f); //Paul
console.log(userOne.l); //o'connor
console.log(userOne); //user{f: "paul", l: "o'connor", email:"poconnor@elevenfifty.org"}

// We name the class
// class User {
// We call the contructor function and create paramaters.
// These will be values that we want to be passed in and stored in the Object.
//   constructor(first, last, e) {
// on the rigth side of these expressions, the world 'first', "last", and "e" bellow,
// we have the value that is getting passed into the parens when the object is created.
// vvv
// this.f = first;
// this.l.last;
// this.email;
// ^^^^^^
// on the right side we have the actual properties of the Object.
// the left side stores the incoming value from the right side as
// the property fot 'this' specific object being called.
//   }
// }
