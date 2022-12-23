/*In javascript arrays are dynamic
Deleting an element without inbuilt function
arr = [1,4,3,0,5]
first find the element by linear search  then
after swapping it will be arr = [1,3,0,5;4] 4 wil be neglected 
*/ 

let arr = [2,4,6,8,10];
let target = 6;
console.log(arr);
console.log(deleteE(arr,target));

function deleteE(arr,target){
    let i = 0;
    let n = arr.length;
    for( ;i<n;i++){
        if(arr[i] == target) break;
    }
    if(i == n) 
    return n;
    
    for(let j=i; j< n-1;j++){
        arr[j] = arr[j+1];
    }
    return arr;
}
