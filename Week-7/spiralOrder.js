let arr = [ [ 1, 2, 3 ],
            [ 4, 5, 6 ], 
            [ 7, 8, 9 ] ];
let top = 0;
let bottom = arr.length-1;
let left=0;
let right=arr.length-1;
let res=[];
let n=arr.length;
let m=arr[0].length;
while(top<=bottom && left<=right){
    for(let i=left;i<=right;i++){
        res.push(arr[top][i])
     }
     top++;
     for(let i=top;i<=bottom;i++){
         res.push(arr[i][right])
      }
      right--;
      for(let i=right;i>=left;i--){
         res.push(arr[bottom][i])
      }
      bottom--;
      for(let i=bottom;i>=top;i--){
         res.push(arr[i][left])
      }
      left++
      
}
console.log(res);

   

