// the map method
// returns an array 

const users = [
    {id: 1, userName: "loet678"},
    {id: 2, userName: "youtube369"},
    {id: 3, userName: "boystichy904"}
]
const userNames = users.map((user) => user.userName)


// doubling numbers
const numArr = [1,2,3,4,5,6];
const doubledNumber = numArr.map(num => num * 2);


// using the index
const pets = ['cat', 'dog', 'horse', 'fish'];
const indexedPets = pets.map((pet, index) => `${index + 1}. ${pet}`);
console.log(indexedPets);