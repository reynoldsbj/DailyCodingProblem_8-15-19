/**
 * Description: Given an array of integers, return a new array such that each 
 * element at index i of the new array is the product of all the numbers in the 
 * original array except the one at i.
 * 
 * Examples: 
 *   1: For input [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. 
 *   2: For input [3, 2, 1], the expected output would be [2, 3, 6].
 * 
 * Follow-up: what if you can't use division?
 */

function CreateArrayOfVal(fill, length) {
    var arr = [];
    for (var i=0; i<length; i++) {
        arr.push(fill);
    }
    return arr;
}

function PerformArrayDivision(numArray, denArray) {
    for (var i=0; i<numArray.length; i++) {
        numArray[i] /= denArray[i];
    }
    return numArray;
}

function SolveProblem(arr) {
    if (arr === null || arr.length < 2)
        throw new Error("Array not valid for problem");

    var arr2 = [];
    var product = 1;
    var zeroIndex = -1;

    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            if (zeroIndex >= 0) {
                return CreateArrayOfVal(0, arr.length);
            }
            else {
                zeroIndex = i;
            }
        }
        else {
            product*=arr[i];
        }
    }

    if (zeroIndex >= 0) {
        arr2 = CreateArrayOfVal(0, arr.length);
        arr2[zeroIndex] = product;
        return arr2;
    }
    else {
        arr2 = CreateArrayOfVal(product, arr.length);
        return PerformArrayDivision(arr2, arr);
    }
}
 