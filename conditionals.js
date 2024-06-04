const username = 'djtiwari'
const password = 'password@123'

//using conditional check if username matches djtiwari
if(username === 'djtiwari' ){
  console.log(`${username} is correct`)
} else {
  console.log(`${username} is invalid`)
}

//using conditional check if password matches password@123
if(password === 'password@123'){
  console.log(true)
} else {
  console.log(false)
}

//nested if statement
// if(username === 'djtiwari' ){
//   console.log(`${username} is correct`)
//   if(password === 'password@123'){
//     console.log('youre logged in')
//   }
// } else {
//   console.log(`${username},${password} is invalid`)
// }

//if, else if, else 
let myPetNum = 16
let yourPetNum = 6

if(myPetNum > yourPetNum){
  console.log('i have more pets')
} else if(myPetNum < yourPetNum){
  console.log('you have more pets')
} else {
  console.log('we have the same amount of pets')
}


const myName = ''
const nums = 1
// console.log(Boolean(myName))
// console.log(Boolean(nums))

if(nums){
  console.log(`value is truthy`)
} else {
  console.log('value is falsy')
}

const loginToken = 'sjkdfbuisFBE894390843894NSDF02438'

if(loginToken){
  console.log('youre already logged in')
} else {
  console.log('try logging in again')
}


const userInputQuestion = ''

if(userInputQuestion){
  console.log('thats a great question')
} else {
  console.log('you didnt ask a question')
}


//string coercion
let string ='sjkldbngfklsdfsdfnso';
let digit = 100
//when you add a number to a string it becomes a string
console.log(string + digit)

//booelan coercion
const myName2 = 'sjkdhnfgiosdhf'
let nums2 
console.log(Boolean(myName2))
console.log(Boolean(nums2))


//numeric Conversion - NaN - it's not a number
console.log(Number(string))
console.log(Number(false))

