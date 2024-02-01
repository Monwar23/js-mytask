// filter array
let arr = [11,12,13,14,5,64,734,88]

let arr1=[]
for(let i=0;i<arr.length;i++){
    let arr2=arr[i];
    if(20<arr2){
        arr1.push(arr2)
    }
}
console.log(arr1)