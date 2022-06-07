// 객체 할당
let obj1 = {"name":"lee", "age":23};
console.log(obj1.name, obj1.age);

// 오브젝트 대입
let obj2 = obj1;
console.log(obj2.name, obj2.age);

// 이름, 나이를 단일 변수에 대입(es5)
let name1 = obj2.name;
let age1 = obj2.age;
console.log(name1, age1);

// es6
let name2, age2; // 객체의 멤버와 같은 이름으로 선언해야한다.
({name2, age2} = obj1);
console.log(name2, age2);

// 함수 인자로 객체를 보낼 경우(값이 안넘어 올 경우 초기값 설정)
function f1({name='수지', age=20}={}){
  console.log(name, age);
}
f1(obj1); // lee 23
// f1();     // 수지 20
f1(obj1.name);  // lee 23 (x), 수지 20(o) 파라미터가 {}일 경우 객체 타입으로만 받는다.
f1(obj1.name, 55); 

