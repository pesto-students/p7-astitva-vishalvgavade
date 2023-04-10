function findThreeSum(a,target){
  let res;
  let diff=Number.MAX_VALUE;
  let result;
  for(let i=0;i<a.length-2;i++){
   sum=a[i]+a[i+1]+a[i+2];
   res=sum-target;
   // console.log(Math.abs(res));
 if(Math.abs(res)<diff){
   diff=Math.abs(res);
   result=sum;
 }
  }
  console.log(result);
}
findThreeSum([-1,2,1,-4] , 1);