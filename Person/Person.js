const person = {
    firstName: "Samuel",
    lastName: "Abiyo",
    age: 25,
    email: "samuelabiyo169@gmail.com",
};

console.log("Full Name: " + person.firstName + " " + person.lastName);

if (person.age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

person.email = "samuelabiyo7@gmail.com";
console.log("New Email: " + person.email);

person.address = "St Mary's Catholic Church Duduguru";
console.log("Address: " + person.address);
