let arr = [-10, 20];
let res = 30;
let diff;
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      diff = arr[i] - arr[j];
    } else {
      diff = arr[j] - arr[i];
    }
    if (diff == res) {
      count++;
    }
  }
}
if (count >= 1) {
  console.log("1");
} else {
  console.log("0");
}
