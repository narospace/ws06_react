// es5에서도 객체 개념은 있었다
function Person(name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.printProfile = function(){
  console.log("이름은 " + this.name + " 이고 나이는 " + this.age + "세입니다.");
}

let p1 = new Person("이영자", 34);
p1.printProfile();

// prototype에 등록이 되었는지 확인
console.log("pringProfile" in p1.__proto__);
console.log("printProfile" in Person.prototype);

// es6의 class로 만들기
class Person2{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  printProfile() {
    console.log(`이름은 ${this.name}이고 나이는 ${this.age}세입니다.`);    
  }

  static showTitle(){
    console.log("ES6의 정적함수");
  }
}
let p2 = new Person2("이영자", 34);
p2.printProfile();
Person2.showTitle();
