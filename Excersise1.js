// 01 Create a function that takes 3 parrameters called floor, ceiling and num.
// All 3 parameters should be numbers. Return true if num is beetween floor and ceiling.
// Otherwise return false.

function numisBetween (floor, ceiling, num) {
    if (num > floor && num < ceiling){
            return true;
            }
    else{
    return false 
    } 
    }
        let answer = numisBetween (10,20,40)
        console.log(answer)
 
 //  Create a function that takes 1 parameter that is an object with 2 properties, name and age. 
 //  Return true if the person's age is greater than 30 or their name contains 
 //  the letter x (case insensitive). Otherwise return false. ?? 
  
 let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];

// 1 Use the Array.filter function to create an array of all the pets owned by Luke.

function ownedByLuke(pet) {
    return pet.ownerName == "Luke";
}

let lukesPets = pets.filter(ownedByLuke);
// console.log(lukesPets);

// 2 Use the Array.map function to create an array of all the names of the owners.

function getOwner(pet){
    return pet.ownerName;
}
let owners = pets.map(getOwner);

// console.log(owners);

// 3 Use the Array.find function to retrieve the pet owned by Shaggy
function findShaggysPet(pet) {
    return pet.ownerName == "Shaggy";
}

let shaggysPet = pets.find(findShaggysPet);
console.log(shaggysPet);

// 4 Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"

function filterCallback(pet){
    let lessThan5 = pet.age < 5;
    let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
    return lessThan5 && hasS;
}

let filteredPets = pets.filter(filterCallback);
console.log(filteredPets);