// Ejercicio .1

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sumOdd(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i]
        }
    }
    return sum
}
// console.log(sumOdd(nums))

// Ejercicio .2

function arrReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

// console.log(arrReverse(nums));

//Ejercicio .3

array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
let resultSum = []

function sumPairs(arr1, arr2) {

    let maxLength = 0

    if (arr1.length > arr2.length) {
        maxLength = arr1.length
    }
    else {
        maxLength = arr2.length
    }

    for (let i = 0; i < maxLength; i++) {

        let num1 = 0
        let num2 = 0

        if (arr1[i]) {
            num1 = arr1[i]
        }

        if (arr2[i]) {
            num2 = arr2[i]
        }

        let pairSum = num1 + num2
        resultSum.push(pairSum)

    }

    return resultSum
}

//   console.log(sumPairs(array1, array2));

// Ejercicio .4

const fruit = ["apple", "orange", "banana", "mango", "watermelon", "grape", "peach"];
let newArr = []

function getEachElement(array, num) {

    num * 1

    for (let i = num - 1; i < array.length; i += num) {
        newArr.push(array[i])
    }

    return newArr
}

// console.log(getEachElement(fruit, 2))

// Ejercicio .5

// function union(arr1, arr2) {

//     let arr3 = [].sort()

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr3.indexOf(arr1[i]) == -1)
//             arr3.push(arr1[i])
//     }                                                                              NO ME SALE :(
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr3.indexOf(arr2[i]) == -1)
//             arr3.push(arr2[i])
//     }

//     return arr3
// }

// console.log(union([1, 2, 3, 4 , 7 ,4, 5,7, 65, 12, 14,14,14,15,75], [100, 2, 1, 10]))

// Ejercicio .5


const myObject = {
    name: "Paco",
    age: 28
}

function deleteProp(obj, key) {
    if (obj.hasOwnProperty(key)) {
        delete obj[key]
        return true
    }
    else {
        return false
    }
    
}

// console.log(deleteProp(myObject, "age"))
// console.log(myObject);