//double quoted string
const hello = "Hello World";

//single quoted string
const stringWithSingleQuotes = 'This is a single quoted string'

//prints to the console
console.log(hello);
console.log(stringWithSingleQuotes);

//all strings have a length property
console.log(stringWithSingleQuotes.length);
console.log(stringWithSingleQuotes[10]);


//concatenation
const favHobbyString = 'My hobbies are'
const hobby1 = 'watching soccer'
// const hobbyDisplay = favHobbyString + ' ' + hobby1

//template literal - using backticks
const hobby2 = 'watching basketball'
const hobby3 = 'playing video games'
const hobbyDisplay = `${favHobbyString} ${hobby1}, ${hobby2} and ${hobby3}`

console.log(hobbyDisplay)