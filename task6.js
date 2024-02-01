// frequency array

let arr = [0,0,0,0,0,0,0,0,0,0]
let samplenumber='12345676543289'

for(let i=0;i<samplenumber.length;i++){
    let arr1=samplenumber[i]
   arr[arr1]++
}
console.log(arr)

// max num
maxNum=arr[0]
maxNumindex=0;
for(let i=0;i<arr.length;i++){
    let arr2=arr[i]
    if(maxNum<arr2){
        maxNum=arr2
        maxNumindex=i
    }

}
console.log(maxNum, maxNumindex)
