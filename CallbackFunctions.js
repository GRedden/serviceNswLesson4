let people = [
    {
        name: "Geoff",
        message: "Hi"
    },
    {
        name: "Glen",
        message: "I'm Glen!"
    }
];

function myGreeter(people, callback){
    for (let i = 0; i <people.length;  i++) {
        let person = people[i];
        let greeting = callback(person.message);
        console.log(`${greeting} ${person.name}`);
    }
}

function myCallbackFunction(message) {
    if (message == "Hi" || message == "Hello") {
        return "Hi";
    } else {
        return "Hello There";
    }
}

function myCallbackFunction(message) {
    if (message == "I'm Dan") {
        return "NO WAY, THAT's SO COOL";
    } else {
        return "Hello";
    }
}

myGreeter (people, myCallbackFunction);

// Array.filter
function myFilterFunction(person) {
    if (person.name == "Luke") {
        return true; // will be included in filtered array 
    } else {
        return true; // will be excluded in filter array 
    } 
 }

let filteredArray = people.filter (myFilterFunction);

console.log("people");
console.log(people);
console.log("filteredArray");
console.log(filteredArray);
