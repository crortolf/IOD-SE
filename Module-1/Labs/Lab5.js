function sizeOfArray(a) {
    return a.length;
}

function smallArray(a, b) {
    return [a, b];
}

let vals = ['a', 2, 7, 'pie', false];

console.log(vals);

vals[1] = 'b';
vals[4] = true;

vals.unshift('head');
vals.pop();

console.log(vals);

console.log(sizeOfArray(vals));

console.log(smallArray('z', 566));
