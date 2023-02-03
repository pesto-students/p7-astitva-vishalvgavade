//hasDuplicate([1, 5, -1, 4]);
// const hasDuplicate = (arr) => new Set(arr).size !== arr.length;
function hasDuplicate(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }
  if (arr.length == set.size) {
    return false;
  } else {
    return true;
  }
}
console.log(hasDuplicate([1, 5, -1, 4])); // false
console.log(hasDuplicate([1, 5, -1, 4, 1])); // true
