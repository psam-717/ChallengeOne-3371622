// the filter method

// even numbers
const numbers = [1,2,3,4,5,6,7];
const evenNumbers = numbers.filter(num => num % 2 == 0);


// business owners
const users = [
    {id: 1, userName: "loet678", isBusinessOwner: true},
    {id: 2, userName: "youtube369", isBusinessOwner: false},
    {id: 3, userName: "boystichy904", isBusinessOwner: false},
    {id: 4, userName: "llama485", isBusinessOwner: true},
    {id: 5, userName: "grok456", isBusinessOwner: true}
]

const businessOwners = users.filter(businessOwner => businessOwner.isBusinessOwner);
const nonBusinessOwners = users.filter(nonBusinessOwner => !nonBusinessOwner.isBusinessOwner);


// odd squared
const numberArr = [1,2,3,4,5,6,7];
const oddSquared = numberArr
                    .filter(oddNum => oddNum % 2 == 1)
                    .map(squared => squared ** 2);
console.log(oddSquared);