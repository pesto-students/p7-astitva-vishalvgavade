const obj = {
    fname: "Vishal",
    Lname: "Gavade",
    //age:23,
    state: "Maharashtra",
    country: "India",
    profession: "farmer",
    //Income:10000,
  };
  function first(age, houseName) {          //function first
    console.log("Name:"+this.fname + " " + this.Lname + ",Age:" + age + " Address:" + houseName);
  }
  function second(landmark, pincode) {
    console.log(landmark + " " + this.state + " " + this.country + " " + pincode);
  }
  function third(income) {
    console.log(
      this.fname +
        " " +
        "is a" +
        " " +
        this.profession +
        "," +
        "his monthly income is" +
        " " +
        income
    );
  }
  first.call(obj, 56, "Nirankar House");     //call 
  second.apply(obj, ["Near Aurangabad", 410003]);    //apply
  let newFun1 = third.bind(obj, 10000);          //bind
  newFun1();
  