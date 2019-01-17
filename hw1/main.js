
//forEach() 
const myEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

console.log(myEach([1,2,3], (x, i) => console.log(x, i)))

// map()  
const myMap = (array, callback) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.push(callback(array[i], i, array));
    }
    return new_array;
}

console.log(myMap([1,2,3], (x) => x + 2))

//filter() 
const myFilter = (array, callback) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) { new_array.push(array[i]); }
    }
    return new_array;
}

console.log(myFilter([1,2,3], (x) => x % 2 === 0))

// some() 
const mySome = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) { return true; }
    }
    return false;
}

console.log(mySome([1,2,3], (x) => x % 2 === 0))

// every() 
const myEvery = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) { return false; }
    }
    return true;
}

console.log(myEvery([1,2,3], (x) => x % 2 === 0))

// reduce() 
const myReduce = (array, callback, start) => {
    let total;
    if (start) { total = start; }
    else if (array.length > 0) { total = array[0]; array = array.splice(1); }
    for (let i = 0; i < array.length; i++) {
        total = callback(total, array[i], i, array);
    }
    return total;
}

console.log(myReduce([1,2,3], (x,y) => x + y, 5));

// range() 
const myRange = (array, start, end, reverse) => {
    let new_array = [];
    if (reverse) {
        let swap = start;
        start = end;
        end = swap;
    }
    let s = (start) ? start : 0;
    let e = (end && end <= array.length) ? end : array.length - 1;
    for (let i = s; i <= e; i++) {
        if (reverse) new_array.push(array[i]);
        else new_array.unshift(array[i]);
    }
    return new_array;
}

console.log(myRange([1,2,3,4,5], 1, 3));

// sum() 
const mySum = (array) => {
    let sum = array[0];
    for (let i = 1; i < array.length; i++) { sum += array[i]; }
    return sum;
}

console.log(mySum([1,2,3,4]));
console.log(mySum(myRange([1,2,3,4,5], 1, 3)));

// reverse() 
const myReverse = (array) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.unshift(array[i]);
    }
    return new_array;
}

console.log(myReverse([1,2,3,4]));

// reverseinplace() 
const myReverseInPlace = (array) => {
    for (let i = 0; i < array.length; i++) {
        let el = array.shift();
        array.splice(array.length - i, 0, el);
    }
}

let a = [1,2,3,4,5]
myReverseInPlace(a);
console.log(a);

// arraytolist() 
const myArrayToList = (array) => {
    let list = { value : null, rest : null };
    for (let i = 0; i < array.length; i++) {
        let o = list;
        while (o.rest != null) { o = o.rest; }
        o.value = array[i];
        if (i + 1 < array.length) { o.rest = { value : null, rest : null }; }
        else { o.rest = null; } 
    }
    return list;
}

console.log(myArrayToList([1,2,3]));

// listtoarray()
const myListToArray = (list) => {
    let l = list;
    let arr = [];
    while (l != null) {
        arr.push(l.value);
        l = l.rest;
    }
    return arr;
}

console.log(myListToArray(myArrayToList([2,3,45])));

// prepend()
const myPrepend = (element, list) => {

}

// nth()
const myNth = (list, number) => {
    let o = list, i = 0;
    while (o != null) {
        if (i++ === number) { return o.value; }
        o = o.rest;
    }
}

console.log(myNth(myArrayToList([1,2,3]), 2));

// recursiventh()
const myRecursiveNth = (list, number) => {
    if (!list.value) { return undefined; }
    if (number === 0) { return list.value; }
    let l = list.rest;
    return myRecursiveNth(l, number - 1);
}

console.log(myRecursiveNth(myArrayToList([1,2,3]), 2));

// deepequal()

const myDeepEqual = (obj_1, obj_2) => {
    
}