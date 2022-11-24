function add(...rest) {
  var sum=0
  for(var i=0;i<rest.length;i++){
    sum=sum+rest[i];
  }
  return sum;
}
function memoize(fun) {
  let cache = {};
  return function (...args) {
    if (args.length==1) {
      return args[0];
    } else if ((args) in cache) {
      return cache[args];
    } else {
      let sum = fun(...args);
      cache[args] = sum;
      return sum;
    }
    console.log(cache);
  };
}

const memoizeAdd = memoize(add);
console.time();
console.log(memoizeAdd(100,100,100));
console.timeEnd();
