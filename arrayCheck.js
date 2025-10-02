let userInput = 'Phil';

const names = ['marvin', 'sekoh', 'annorbah', 'phil'];

// error check validation
if(!names.includes(userInput.toLocaleLowerCase())){
    console.log("Name not found")
}else {
    console.log("Name has been found")
}