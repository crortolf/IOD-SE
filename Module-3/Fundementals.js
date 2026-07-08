//PROBLEM ONE

console.log("" + 1 + 0)
//10

console.log("" - 1 + 0)
//-1

console.log(true + false)
//1

console.log(!true)
//false

console.log(6 / "3")
//2

console.log("2" * "3")
//6

console.log(4 + 5 + "px")
//9px

console.log("$" + 4 + 5)
//$45

console.log("4" - 2)
//2

console.log("4px" - 2)
//-1
//CORRECT: NaN

console.log("  -9  " + 5)
//  -9  5

console.log("  -9  " - 5)
//-14

console.log(null + 1)
//2
//CORRECT: 1

console.log(undefined + 1)
//1
//CORRECT: NaN

console.log(undefined == null)
//true

console.log(undefined === true)
//false

console.log(" \t \n" - 2)
//NaN
//CORECT: -2

//PROBLEM TWO

let three = "3"
let four = "4"
let thirty = "30"

//what is the value of the following expressions?
let addition = three + four
//34
//to correct, cast:
addition = + three + 4

let multiplication = three * four
//12
let division = three / four
//.75
let subtraction = three - four
//-1

let lessThan1 = three < four
//true
let lessThan2 = thirty < four
//true
//to correct, cast again:
lessThan2 = + thirty < four

console.log(addition)
console.log(multiplication)
console.log(division)
console.log(subtraction)
console.log(lessThan1)
console.log(lessThan2)

//PROBLEM THREE
if (0) console.log('#1 zero is true');
//no print
//0 is the only number that evaluates to false

if ("0") console.log('#2 zero is true');
//print
//all non-empty strings evaluate to true

if (null) console.log('null is true');
//no print
//null is false

if (-1) console.log('negative is true');
//print
//non-zero is true

if (1) console.log('positive is true');
//print
//non-zero is true

//PROBLEM FOUR

let a = 2, b = 3;
let result = `${a} + ${b} is `;

if (a + b < 10) {
    result += 'less than 10';
} else {
    result += 'greater than 10';
}

console.log(result);

result = `${a} + ${b} is `;
a = 5
b = 7
if (a + b < 10 ? result += 'less than 10' : result += 'greater than 10');
console.log(result);

result = `${a} + ${b} is `;
a = 2
b = 1
if (a + b < 10 ? result += 'less than 10' : result += 'greater than 10');
console.log(result);

result = `${a} + ${b} is `;
a = 1
b = 9
if (a + b < 10 ? result += 'less than 10' : result += 'greater than 10');
console.log(result);

result = `${a} + ${b} is `;
a = 500
b = 0
if (a + b < 10 ? result += 'less than 10' : result += 'greater than 10');
console.log(result);

//a += b is the same as a = a + b; here is concats a phrase on to the end of result and sets that as the value of result

//PROBLEM FIVE

// function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }

// let getGreeting = function (name) {
//     return 'Hello ' + name + '!';
// }

let getGreeting = (name) => {
    return 'Hello ' + name + '!';
}

console.log(getGreeting('chris'));

//PROBLEM SIX

const westley = {     
    name: 'Westley',     
    numFingers: 5 
} 

const rugen = {     
    name: 'Count Rugen',     
    numFingers: 6 
}  

const inigo = {     
    firstName: 'Inigo',
    lastName: 'Montoya',    
    greeting(person) {          
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;         
        console.log(greeting + this.getCatchPhrase(person));     
    },     
    getCatchPhrase: (person) => {         
        return (person.numFingers === 6 ? 'You killed my father. Prepare to die.' : 'Nice to meet you.');    
    } 
}  

inigo.greeting(westley) 
inigo.greeting(rugen)

//PROBLEM SEVEN
