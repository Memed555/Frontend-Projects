



// // // // // // // // // // // const emp1 = {
// // // // // // // // // // //   name: "mustafa",
// // // // // // // // // // //   age: 25,
// // // // // // // // // // //   showInfos: function () {
// // // // // // // // // // //     console.log("bilgiler gosteriliyor");
// // // // // // // // // // //   }
// // // // // // // // // // // };
// // // // // // // // // // // const emp2 = {
// // // // // // // // // // //   name: "ahmet",
// // // // // // // // // // //   age: 25,
// // // // // // // // // // // };
// // // // // // // // // // // emp1.salary = 4000;

// // // // // // // // // // // console.log(emp1);

// // // // // // // // // // function Employee(name, age, salary) {
// // // // // // // // // //   this.x = name;
// // // // // // // // // //   this.y = age;
// // // // // // // // // //   this.z = salary;
// // // // // // // // // //   this.showInfos = () => {
// // // // // // // // // //     console.log(this.x, this.y, this.z);
// // // // // // // // // //   };
// // // // // // // // // // }
// // // // // // // // // // const emp1 = new Employee("mustafa", 25, 4000);
// // // // // // // // // // console.log(emp1);
// // // // // // // // // // emp1.showInfos();


// // // // // // // // // const object = new Object();
// // // // // // // // // const object2 = new Object();
// // // // // // // // // object.name ="Mustafa";
// // // // // // // // // console.log(object);



// // // // // // // // function Employee(name,age){
// // // // // // // // this.name = name;
// // // // // // // // this.age = age;

// // // // // // // // }
// // // // // // // // Employee.prototype.showInfos = function(){

// // // // // // // //     console.log(this.name,this.age);

// // // // // // // // };
// // // // // // // // const emp1 = new Employee("Musatfa",25)
// // // // // // // // const emp2 = new Employee("Ali",31);
// // // // // // // // console.log(emp1);
// // // // // // // // console.log(emp2);
// // // // // // // // emp2.showInfos();





// // // // // // // const obj = {
// // // // // // //   test1:function(){
// // // // // // //     console.log("test 1");
// // // // // // //   },
// // // // // // //   test2:function(){
// // // // // // //     console.log("Test 2");
// // // // // // //   }

// // // // // // // }
// // // // // // // // console.log(obj);
// // // // // // // const emp = Object.create(obj);
// // // // // // // emp.name = "mustafa";
// // // // // // // emp.age = 25;
// // // // // // // console.log(emp);
// // // // // // function Person(){

// // // // // // }
// // // // // // Person.prototype.test1 = function(){
// // // // // //   console.log("test 1");
// // // // // // }
// // // // // // Person.prototype.test2 = function(){
// // // // // //   console.log("test 2");
// // // // // // }
// // // // // // function Employee(name,age){
// // // // // //   this.name = name;
// // // // // //   this.age = age;
// // // // // // }
// // // // // // Employee.prototype = Object.create(Person.prototype);
// // // // // // const emp = new Employee("Mustafa",41);
// // // // // // emp.test1();
// // // // // // console.log(emp)


// // // // // // CALL, APPLY ,BIND ;
// // // // //  const obj1 = {
// // // // //   number1:10,
// // // // //   number2:20
// // // // //  };
// // // // //  const obj2 = {
// // // // //   number1:30,
// // // // //   number2:40
// // // // //  };
// // // // //  function addNumbers(number3,number4){

// // // // //   console.log(this.number1+this.number2 +number3+number4);
// // // // //  }
// // // // // // //  addNumbers(100,200);
// // // // // // addNumbers.call(obj1,100,200);
// // // // // // addNumbers.call(obj2,100,200);


// // // // // // addNumbers.apply(obj1,[100,200]);
// // // // // // addNumbers.apply(obj2,[100,200]);

// // // // // ///bind

// // // // // function getNumbersTotal(number3,number4){
// // // // //   return this.number1+this.number2+number3+number4;
// // // // // }

// // // // // const copyFUn1 = getNumbersTotal.bind(obj1);
// // // // // const copyFUNC2= getNumbersTotal.bind(obj2);
// // // // // console.log(copyFUNC2);
// // // // // console.log(copyFUn1);



// // // // // Kalitim -Inheritance

// // // // function Person(name,age){
// // // //   this.name = name;
// // // //   this.age = age;
// // // // }
// // // // Person.prototype.showInfo = function(){
// // // //   console.log(this.name,this.age)
// // // // }
// // // // // const person = new Person("Mustafa",25);
// // // // // console.log(person);

// // // // function Employee(name,age,salary){
// // // //   this.name = name;
// // // //   this.age = age;
// // // //   this.salary = salary;
// // // //   Person.call(this,name,age);
// // // // }
// // // //  Employee.prototype   = Object.create(Person.prototype)
// // // // Employee.prototype.showInfo = function(){
// // // //   console.log(this.name,this.age,this.salary);
// // // // }
// // // // const emp = new Employee("Mustafa",25,4999);
// // // // // console.log(emp)
// // // // // emp.showInfo();












// // // // ECMA SCRIPT 6
// // // // function Employee(name, age, salary) {
// // // //   this.name = name;
// // // //   this.age = age;
// // // //   this.salary = salary;
// // // // }

// // // // Employee.prototype.showInfos = function () {
// // // //   console.log(this.name, this.age, this.salary);
// // // // }

// // // // const emp = new Employee("Mustafa", 25, 4000);


// // // // console.log(emp);




// // // class Employee{
// // // constructor(name,age,salary){
// // // this.name =name;
// // // this.age = age;
// // // this.salary = salary;
// // // }
// // // showInfos(){
// // //   console.log(this.name,this.age,this.salary);
// // // }
// // // }

// // // const emp  = new Employee("Mustafa",25,4000);
// // // console.log(emp);
// // // emp.showInfos()

















// // // statik metodlar

// // class Mathematika{
// //   static cube(x){
// //     console.log(x*x*x);
// // //   }
// // // }
// // // Mathematika.cube(3)





// // //ECMASCRIPT 6 =INHERITANCE

// // class Person { //superClass or baseClass
// //   constructor(name,age){
// //   this.name = name;
// //   this.age = age;
// //   }
// //   showInfos(){
// //     console.log(this.name,this.age);
// //   };
// // }

// // class Employee extends Person{//derivedClass,subclass,childclass
// //   constructor(name,age,salary)
// //    {
// //   //  this.name = name;
// //   //  this.age = age;
// //   super(name,age);
// //    this.salary  = salary;

// //   }
// //   zort(){
// //     console.log("zooozrt");
// //   }
// //   raiseSalary(amount){
// //     this.salary = this.salary+ amount;
// //   }
// // }
// // const emp = new Employee("mustafa",24,4000);;
// // console.log(emp);


// class Man {
//   constructor(name,age,maas,how){
// this.name= name;
// this.age = age;
// this.maas = maas;
// this.how = how;
//   }
// showInfoaboutMan(){
//   console.log(this.name,this.age,this.maas,this.how);
// }
// }
// class Qardas extends Man{
//   constructor(name,age,maas,how,money){
//     super(name,age,maas,how);
//     this.money= money;
//   }



// }

// const emp = new Qardas("mamed",19,420,"subay",58);
// console.log(emp)











