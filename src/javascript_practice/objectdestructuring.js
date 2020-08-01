const myAddress = {
    streetNumber: 11273,
    streetName: "Cherry lake",
    city: "Indianapolis",
    state: "IN",
    zip: "46235",
};

// const streetNumber = myAddress.streetNumber;
// const city = myAddress.city;

const {streetNumber, city} = myAddress;

console.log(streetNumber , city);


// Get to the email
const req = {
    body: {
        user: {
            email: "rose@mary.com",
            password: "flowers247",
        }
    }
};

const {email, password} = req.body.user

console.log(email, password);

