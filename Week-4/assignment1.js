
//regular promise to solve the problem

// function randomNumber(){
//     let rNumber=Math.floor( Math.random()*10);
//     return rNumber;
//   }
//   let rNum=randomNumber();
//   console.log(rNum);
//   let promise = new Promise((resolve, reject) => {
//     if(rNum%5==0){
//       reject("The Promise is rejected");
//     }
//     else{
//       resolve("The promise is resolved");
//     }
//    })
//    promise.then(function(val){
//     console.log(val)
//    })
//    promise.catch(function(val){
//     console.log(val)
//    })


// Using polyfill
function Future(executer) {
    let onResolve;
    let onReject;
    let notFulfilled = false;
    let fulfilled = false,
      called = false,
      value;
  
    function resolve(val) {
      fulfilled = true;
      value = val;
      if (typeof onResolve === "function") {
        called = true;
        onResolve(val);
      }
    }
    function reject(val) {
      notFulfilled = true;
      value = val;
      if (typeof onReject === "function") {
        called = true;
        onReject(val);
      }
    }
  
    this.then = function (callback) {
      onResolve = callback;
      if (fulfilled && !called) {
        called = true;
        onResolve(value);
      }
      return this;
    };
    this.catch = function (callback) {
      onReject = callback;
      if (notFulfilled && !called) {
        called = true;
        onReject(value);
      }
      return this;
    };
    executer(resolve, reject);
  }
  
  // console.log(p1)
  
  function randomNumber() {
    return (Math.floor(Math.random() * 10));
  }
  let p1 = new Future((resolve, reject) => {
    let a = randomNumber();
    if (a % 5 == 0) {
      reject( a + " " + new Error("Rejected random number"));
    } else {
      resolve(a);
    }
  })
    .then((el) => {
      console.log("then is called");
      console.log(el);
    })
    .catch((el) => {
      console.log("catch is called");
      console.log(el);
    });
  
  // let p = new Promise((resolve) =>{
  //   resolve(10);
  //   resolve(20);