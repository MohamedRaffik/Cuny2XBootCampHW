
//forEach() dupe
const myEach = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

console.log(myEach([1,2,3], (x, i) => console.log(x, i)))

// map() dupe 
const myMap = (array, callback) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        new_array.push(callback(array[i], i, array));
    }
    return new_array;
}

console.log(myMap([1,2,3], (x) => x + 2))

//filter() dupe
const myFilter = (array, callback) => {
    let new_array = [];
    for (let i = 0; i < array.length; i++) {
        (callback(array[i], i, array)) ? new_array.push(array[i]) : null;
    }
    return new_array;
}

console.log(myFilter([1,2,3], (x) => x % 2 === 0))

// some() dupe
const mySome = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) { return true; }
    }
    return false;
}

console.log(mySome([1,2,3], (x) => x % 2 === 0))

// every() dupe
const myEvery = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) { return false; }
    }
    return true;
}

console.log(myEvery([1,2,3], (x) => x % 2 === 0))

// reduce() dupe
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