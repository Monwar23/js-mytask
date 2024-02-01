// max min
let arr = [11,12,13,14,5,64,734,88]
let maxnum=arr[0]
let minnum=arr[0];
for(let i=0;i<arr.length;i++){
    arr1=arr[i];
    if(maxnum<arr1){
        maxnum=arr1
    }
    if(minnum>arr1){
        minnum=arr1
    }
}
console.log(maxnum)
console.log(minnum)
