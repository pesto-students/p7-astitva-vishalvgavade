let a = [7,6,5,4,3];
let max = 0;
let min = a[0];
let buy;
let sell;
for (let i = 0; i < a.length; i++) {
  if (a[i] < min) {
    min = a[i];
    buy = i;
  }
}
for (let k = buy; k < a.length; k++) {
  if (a[k] > max) {
    max = a[k];
    sell = k;
  }
}
if(buy+1==a.length){
    console.log("No Transaction will occure")
}
else{
console.log("Buy on day" + " " +(buy+1));
console.log("sell on day" + " " +(sell+1));
}

