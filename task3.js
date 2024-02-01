// array element find
let arr = [11,12,13,14,5,64,734,88]

let target=12;
let found=-1;
for(let i=0;i<arr.length;i++){
    let arr1=arr[i];
   if(arr1==target){
    found=i;
   }
  
  
}
if(found>-1){
    console.log(found, 'found')
   }
   else{
    console.log('not found')
   }
