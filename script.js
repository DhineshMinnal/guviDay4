// var obj1 = { name: "Person 1", age: 5 };

// var obj2 = { age: 5, name: "Person 2" };

// let same

// for (let ele in obj1) {
//     if (obj2[ele] && obj2[ele] === obj1[ele]) {
//         same = true
//     } else {
//         same = false
//         break
//     }
// }

// console.log(same)           /// same



// // Use the rest countries API url -> https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json and display all the country flags in console

let xhr = new XMLHttpRequest()

xhr.open("GET", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")

xhr.send()

// adding the event listener

xhr.onload = function () {
    // process the request and server will return the data
    if (xhr.status >= 200 && xhr.status < 300) {
        //conver the data raw data to js notation
        var data = JSON.parse(xhr.response);
        // console.log(data);

        //Looping through the data
        for (var i = 0; i < data.length; i++) {
            var country = data[i];
            console.log(`
          Name: ${country.name},
          Region: ${country.region},
          SubRegion: ${country.subregion},
          Population: ${country.population},  
          Flag: ${country.flag}
          `);
        }
    } else {
        //If there is any error due to api enpoint or server problem
        // then we will use this else for printing the error
        console.log("Data is not available");
    }
}

// //  Medium problems
// 1. Declare four variables
let a, b, c, d
console.log(a, b, c, d);

// 2. get value of the variable
var myvar = 1;
console.log("myvar: ", myvar);

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines
var fName = "Thiru"
var lName = "kumar"
var maritalStatus = "married"
var country = "India"
var age = "28"

// 4.Declare variables to store your first name, last name, marital status, country and age in a single line
var fName = "Thiru"; var lName = "kumar"; var maritalStatus = "married"; var country = "India"; var age = "28"

// 5.Declare variables and assign string, boolean, undefined and null data types
let name = "prabhakaran"
let isGraduated = true
let petName
let passedout = null
console.log(passedout)

// 6. Convert the string to integer
let number = "10"
console.log(parseInt(number))
console.log(Number(number))
console.log(+number)


// 7. Write 6 statement which provide truthy & falsey values.
var fName = "Thiru"; var lName = "kumar"; var maritalStatus = "married"; var country = "India"; var age = "28"; var city = "chennai"
console.log(isNaN(fName))
console.log(fName === lName)
console.log(maritalStatus === "married")
console.log(country.includes("I"))
console.log(age > 29)
console.log(typeof (city) === "string")



//******* */ Task 2  programes for operators ************


//  // 1. Square of the number

var num = 10
const numSqre = function (number) {
    return number ** 2
}

console.log(numSqre(num))

//  // 2. Swapping 2 numbers

const numsSwap = (num1, num2) => {
    [num1, num2] = [num2, num1]
    console.log(num1, num2)
}
numsSwap(2, 5)

// //3. Addition of 3 numbers

const addThree = (num) => {
    return num + 3
}

console.log(addThree(3))


// //4. Celsius to Fahrenheit conversion

function celToFaren(temp) {
    return (temp * 1.8) + 32
}

console.log(celToFaren(30))


// // 5. Meter to miles
function metToMiles(mts) {
    return mts * 0.0006213712
}

console.log(metToMiles(15))


// // 6. Pounds to kg

function pdsToKg(pounds) {
    return pounds * 0.45
}

console.log(pdsToKg(82))


// // 7. Calculate Batting Average

var runs = 5000
var outs = 10
function battingAvg(run, NoOfOuts) {
    return run / NoOfOuts
}

console.log(battingAvg(runs, outs))


//  // 8. Calculate five test scores and print their average
var scores = [95, 200, 215, 300, 350]
const findAvg = function (runs) {
    let totalRuns = runs.reduce((pr, cr) => pr + cr, 0)
    const avg = totalRuns / runs.length
    return avg
}

console.log(findAvg(scores))


//  // 9.Power of any number x^y
function findPower(a, b) {
    return a ** b
}
console.log(findPower(2, 4))


//  // Calculate Simple Interest
function findSimpleInterest(p, r, t) {
    const si = p * r * t / 100
    return si
}
console.log(findSimpleInterest(1000, 14, 1))


//  // Calculate area of an equilateral triangle
const eqiTriangleArea = (side) => {
    let area = Math.floor(Math.sqrt(3) * side * side / 4)
    return area
}

console.log(eqiTriangleArea(19))


//  // Area Of Isosceles Triangle
const isoTriangleArea = (base, height) => {
    let area = base * height / 2
    return area
}

console.log(isoTriangleArea(19, 20))


//  // Volume Of Sphere

const findVolume = (radius) => {
    return Math.floor(Math.PI * 4 * radius * radius / 3)
}

console.log(findVolume(3))


//  // volume of prism

const findPrismVolume = function (base, height) {
    return base * height
}
console.log(findPrismVolume(5, 7))


//  // Find area of a triangle

const findTriangleArea = (base, height) => {
    return base * height / 2
}
console.log(findTriangleArea(5, 7))


// // Give the Actual cost and Sold cost, Calculate Discount Of Product

function findDiscount(AC, SC) {
    let discount = (AC - SC) * 100 / AC
    return `${discount}%`
}
console.log(findDiscount(100, 20))


// // Given their radius of a circle and find its diameter, circumference and area.

const findCircleParameters = (radius) => {
    let diameter = radius * 2
    let circumference = Math.floor(Math.PI * radius * 2)
    let area = Math.floor(Math.PI * radius ** 2)
    let result = `
    diameter = ${diameter}
    circumference = ${circumference}
    area = ${area}
    `
    return result
}
console.log(findCircleParameters(2))


//  // Given two numbers and perform all arithmetic operations.

const arithmeticOperations = (num1, num2) => {
    let add = num1 + num2
    let subtract = Math.abs(num1 - num2)
    let multiple = num1 * num2
    let divide = Math.floor(num1 / num2)
    let result = `
    add = ${add}
    subtract = ${subtract}
    multiple = ${multiple}
    divide = ${divide}
    `
    return result
}
console.log(arithmeticOperations(15, 9))


//  // Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****

const printPattern = () => {
    let result = `
    ******
    ******
    ******
    ******
    ******
    `
    console.log(result)
}
printPattern()


//  // Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. 
// Calculate the total energy bill of that consumer if per unit rate is 10?

const findElecBill = (rate, wattsPerDay) => {
    let bill = rate * wattsPerDay * 30
    return bill
}
console.log(findElecBill(10, 30))


//  // calculate CGPA
const findCGPA = (gradePoints) => {
    let total = gradePoints.reduce((a, c) => a + c, 0)
    let cgpa = total / gradePoints.length
    return cgpa
}
console.log(findCGPA([8, 9, 7, 8, 6]))



//  //******* */ Tasks 3***********


// // 1.  Write a loop that makes seven calls to console.log to output the following triangle:

const printTrainglePattern = (param) => {
    for (let i = 1; i <= param; i++) {
        let toLog = ""
        for (j = 1; j <= i; j++) {
            toLog += "*"
        }
        console.log(toLog)
    }
}
printTrainglePattern(7)


// // 2. Iterate through the string array and print it contents

var strArray = ["<option>Jazz</option>",
    , "<option>Blues</option>",
    , "<option>New Age</option>",
    , "<option>Classical</option>",
    , "<option>Opera</option>"]

function printContent(arr) {
    arr.forEach(ele => {
        // toPrint = ele.split("")
        console.log(ele)
    })
}
printContent(strArray)


// // write a code to count the elements in the array . Don’t use length property
var myarray = [11, 22, 33, 44, 55]

function countLength(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            count++
        }
    }
    return count
}

let newArray = []

console.log(countLength(myarray))


//  // Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.

let foods = [
    "south indian meals",
    "north indian meals",
    "Diet meals",
    "fruit salad",
    "fruit sandwich",
    "dal rice",
    "tomato rice",
    "sambar",
    "cucumber onions salad",
    "green chutney",
    "chicken biriyani",
    "mutton biriyani",
    "chicken pepper fry",
    "mutton chukka",
    "coraindar rice",
    "lemon rice",
    "arabian shawarma",
    "pizza",
    "burgar",
    "fried chicken"
]


//  // Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?

console.log(foods[4])


//  // Find the length of your foods array

console.log(foods.length)


//  // Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.

let friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran',
    // 'Dhoni'
];

function dataHandling(input) {
    for (var i = 0; i < input.length; i++) {
        if (friends[i] == "Mari") {
            friends[i] = "Munnabai"
        }
    }
}
// dataHandling(friends)
console.log(friends);


//  // Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.

function toPrintCapAmerica(input) {
    for (var i = 0; i < input.length; i++) {
        if (friends[i] == "CaptianAmerica") {
            console.log(friends[i])
            break
        } else {
            console.log(friends[i])
        }
    }
}
toPrintCapAmerica(friends)


//  // Find the person is ur friend or not.

function friendToFound(input, name) {
    for (var i = 0; i < input.length; i++) {
        if (friends[i] === name) {
            return "Yes"
        }
        return "No"
    }
}
let found = friendToFound(friends, 'Jeff');
console.log(found);



// //  We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.

var friends1 = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
];

var friends2 = [
    'Gabbar',
    'Rajinikanth',
    'Mass',
    'Spiderman',
    'Jeff',
    'ET'
];

function toSort(input1, input2) {
    let result = input1.concat(input2)
    result.sort()
    return result
}
console.log(toSort(friends1, friends2))



// let friends = [
//     'Mari',
//     'MaryJane',
//     'CaptianAmerica',
//     'Munnabai',
//     'Jeff',
//     'AAK chandran',
// ];

// Get the first item, the middle item and the last item of the array
const firstName = friends[0]

const length = friends.length
let middleIndex

if (length % 2 === 0) {
    middleIndex = length / 2 - 1
} else {
    middleIndex = Math.ceil(length / 2 - 1)
}

const middleName = friends[middleIndex]
const lastName = friends[length - 1]

console.log(firstName, middleName, lastName)


// // Add your name to the end of the friends array, and add another name to beginning.

friends.push("Dhinesh")
friends.unshift("Dileep")


// // Add Mr or Ms to the names in the friends array.
let newFriends = friends.map(ele => ele = "Mr. " + ele)

console.log(newFriends)


//  // Concat all the names the friends array and return as comma “,” seperated string.

const friendsString = friends.join(",")
console.log(friendsString)


//  // Find the friends names who has letter ‘a’ and return the list.


let list = friends.filter(ele => ele.includes("a"))

console.log(list)


// Find the avg length of all the friends names. Get the individual length of the names and do the avg.


let lengths = []

let avg

friends.forEach(ele => lengths.push(ele.length))

const totalLength = lengths.reduce((a, c) => a + c, 0)

avg = Math.floor(totalLength / lengths.length)

console.log(avg)


// // Find the names and return the list starting with letter M.

let MNames = friends.filter(ele => ele[0] === "M")
console.log(MNames)


// // Find the name with max characters and return the name.

let maxLength = 0
let maxChar

for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > maxLength) {
        maxLength = friends[i].length
        maxChar = friends[i]
    }
}

console.log(maxLength, maxChar)


// // Find the name with min characters and return the name.

let minLength = friends[0].length
let minChar

for (let i = 0; i < friends.length; i++) {
    if (friends[i].length < minLength) {
        maxLength = friends[i].length
        minChar = friends[i]
    }
}

console.log(minLength, minChar)


// // Find the average in the array below.
// // Make sure you add only the numbers and do avg.

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];

let nums = friendsInfo.map(ele => parseInt(ele)).filter(ele => !isNaN(ele))

// friendsInfo.forEach(ele => {
//     if (!isNaN(ele)) {
//         nums.push(parseInt(ele))
//     }
// })

const total = nums.reduce((a, c) => a + c, 0)
const Avg = total / nums.length

console.log(nums, Avg)


//  // Print the contents of the input variable

var Input = [
    ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
    ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
    ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
    ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
]

function prints(input) {
    input.forEach(ele => console.log(ele.join(" ")))
}
prints(Input);


//  // ***********objects************

//  // What the output
myobject = { 1: 'one', '11': 1, 'name': 'arun' }
console.log(myobject['11']);
console.log(myobject.name)


// Add a new key value pair to myobject
// key : ten
// value : ten

myobject.ten = "ten"
console.log(myobject)


// Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.

let guvi = {
    name: "Guvi geek",
    address: "6, IIT-M RP, chennai"
}
