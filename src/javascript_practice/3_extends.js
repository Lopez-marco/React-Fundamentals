// ES6 JS Classes
class User {
  constructor(name) {
    (this.name = name), (this.type = "Trial User");
  }
  // Method1
  greet() {
    console.log("Welcome Back, " + this.name);
  }
  // method2
  status() {
    console.log("Current Status: " + this.type);
  }
}
// extends
class TrialUser extends User {
  trialEnding() {
    console.log(
      "Your trial will be ending soon, " +
        this.name +
        "." +
        " Would you like to join our program?"
    );
  }
}
// instance of user class
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

// instance of trialUser class
var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();
