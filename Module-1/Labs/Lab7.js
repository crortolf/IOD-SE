//function to add two values, then print and return the value
function add(a, b) {
    console.log(a + b);
    return a + b;
}

if (add(1, 5) != 6)
{
    throw new Error('Add failed test 1');
}

if (add(7, 5) != 12)
{
    throw new Error('Add failed test 2');
}

if (add(853, 7734) != 8587)
{
    throw new Error('Add failed test 3');
}

//function to subtract two values, then print and return the value
function sub(a, b) {
    console.log(a - b);
    return a - b;
}

if (sub(1, 5) != -4)
{
    throw new Error('Sub failed test 1');
}

if (sub(84, 27) != 57)
{
    throw new Error('Sub failed test 2');
}

if (sub(1930, 234) != 1696)
{
    throw new Error('Sub failed test 3');
}

//function to multiply two values, then print and return the value
function mult(a, b) {
    console.log(a * b);
    return a * b;
}

if (mult(5, 8) != 40)
{
    throw new Error('Mult failed test 1')
}

if (mult(12, 12) != 144)
{
    throw new Error('Mult failed test 2')
}

if (mult(585, 963) != 563355)
{
    throw new Error('Mult failed test 3')
}

//function to divide two values, then print and return the value
function div(a, b) {
    console.log(a / b);
    return a / b;
}

if (div(7, 2) != 3.5)
{
    throw new Error('Div failed test 1')
}

if (div(72, 9) != 8)
{
    throw new Error('Div failed test 2')
}

if (div(82713, 100) != 827.13)
{
    throw new Error('Div failed test 3')
}

//function to say hello to someone in the console
function sayHi(name) {
    console.log("Hello "+name);
}