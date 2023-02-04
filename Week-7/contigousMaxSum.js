function maxSubArraySum(a) {
  // var arr2 = [];
  var max = 0;
  for (i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = i; j < a.length; j++) {
      sum += a[j];
      if (sum > max) {
        max = sum;
      }
    }  
  }
  console.log(max);
}
// var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];  =>6
 var a =[1, 2, 3, 4, -10]
maxSubArraySum(a);
