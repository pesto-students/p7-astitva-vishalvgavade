let arr = [1,2,2,0,2,1,0];
// // arr.sort((a,b)=>{
// //     return a-b;
// // })
// // console.log(arr);
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);


