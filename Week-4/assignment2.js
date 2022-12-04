Var Person = function() {};
Person.prototype.initialize=function(name,age){
    this.name=name;this.age=age;
}
// TODO: create the class Teacher and a method teach
var him=newTeacher();
him.initialize("Adam",45);
him.teach("Inheritance");