// ES6 JS Classes
class User {
  constructor(username, password) {
    this.name = username;
    this.password = password;
    this.type = "Trial User";
  }
  // Method 1
  greet() {
    console.log("Welcome back, " + this.name);
  }
  // Method 2
  status() {
    console.log("Current Status: " + this.type);
  }
}

// Instance of the class/new object
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

// super
class BronzeLevelUser extends User {
  // we add the ccinfo property to the user here.
  constructor(username, password, ccinfo) {
    //   if you are going to use "this" in your constructor, you 
    // must have super that points to the parent constructor.
      super(username, password);
    this.type = "Bronze User";
    this.ccinfo = ccinfo;
  }
  getInfo() {
    console.log(this.username, this.password, this.type, this.ccinfo);
  }
}

var bronzeGuy = new BronzeLevelUser(
  "Bronze Dude",
  "bronze7589",
  "4242424242424242"
);
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);