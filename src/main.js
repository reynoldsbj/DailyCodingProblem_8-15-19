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

function PerformArrayDivision(numArray, denArray) {
    for (var i=0; i<numArray.length; i++) {
        numArray[i] /= denArray[i];
    }
    return numArray;
}

function CheckValidInput(arr) {
    if (arr === null || arr.length < 2)
        throw new Error("Array not valid for problem");
}

function SolveProblem(arr) {
    AddPolyfills();
    CheckValidInput(arr);

    var arr2 = [];
    var product = 1;
    var zeroIndex = -1;

    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            if (zeroIndex >= 0) {
                return new Array(arr.length).fill(0);
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
        arr2 = new Array(arr.length).fill(0);
        arr2[zeroIndex] = product;
        return arr2;
    }
    else {
        arr2 = new Array(arr.length).fill(product);
        return PerformArrayDivision(arr2, arr);
    }
}

function SolveProblemFollowUp(arr) {
    AddPolyfills();
    CheckValidInput(arr);

    var arr2 = [];
    var beforeProduct = 1;
    var otherElementsProduct;
    var zeroFound = false;    

    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            if (zeroFound) {
                return new Array(arr.length).fill(0);
            }
            zeroFound = true;
        }

        otherElementsProduct = beforeProduct;

        for (var j=i+1; j<arr.length; j++) {
            otherElementsProduct *= arr[j];
        }

        arr2.push(otherElementsProduct);
        beforeProduct *= arr[i];
    }
    return arr2;
}
 