//1. to print upto n natural number 
function Natural(num) {
    let a = 1;
    while(a<=100){
        console.log(a);
        ++a
    }    
}
console.log(Natural(100));

//2. 

// function avg(arr) {
//    let sum = 0;
//    for(let i =0;i<arr.length;i++){
//     sum += arr[i];
//    }
//   return sum/arr.length;
// }

// 5. Elements greater than avg sum of an array

function greaterThanAvg(arr) {
    let avgNo = avg(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > avgNo) {
            console.log(arr[i]);
        }
    }
}

//6 Find the largest element in an array
// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);

//7 Find the smallest element in an array
// var arr = [3, 6, 2];
// var smallest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (smallest > arr[i] ) {
//         smallest = arr[i];
//     }
// }
// console.log(smallest);

//8 Find the given element in an array and return it's index if present else -1.
var arr = [3,5,6,7];
var num = arr[0];

for(var i=0;i<= arr.length-1;i++){
    if(num == i)
    return i
    else
    return -1
}

