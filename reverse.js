//to reverse the given array 
// let arr = [2,4,6,8,10];

// console.log(arr);
// console.log(reverseA(arr));

// function reverseA(arr){
//     let arr2 = [];

//     let n = arr.length-1;
//     let ind = 0
//     for(i=n; i>=0;i--){
//         arr2[ind++] = arr[i];
//     }
//     return arr2;
// }
let nums = [1,2,3,4,5,6];
let target = 6;

console.log()
let sum =0;
    for(let i=0;i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
           sum = nums[i]+ nums[j];
           if(sum === target){
             return [i,j];
           } 
        }
    }