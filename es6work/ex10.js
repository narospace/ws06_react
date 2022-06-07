// Number 객체
let a = 12;
let b = 23.0;
let c = 12.6;
console.log(a + "는 정수인가?" + Number.isInteger(a));
console.log(b + "는 정수인가?" + Number.isInteger(b));  // .0 (소수 .0이면 정수로 판다)
console.log(c + "는 정수인가?" + Number.isInteger(c));

let a1 = "NaN";
let b1 = NaN;
let c1 = "안녕";
let d1 = 12;

// es5의 isNaN 숫자인 경우만 false
console.log("es5 isNaN");
console.log(a1 + "은 NaN인가?" + isNaN(a1));
console.log(b1 + "은 NaN인가?" + isNaN(b1));
console.log(c1 + "은 NaN인가?" + isNaN(c1));
console.log(d1 + "은 NaN인가?" + isNaN(d1));

// es6의 isNaN 값이 NaN인 경우만 true
console.log("es6 is NaN");
console.log(a1 + " 은 NaN인가?" + Number.isNaN(a1));
console.log(b1 + " 은 NaN인가?" + Number.isNaN(b1));
console.log(c1 + " 은 NaN인가?" + Number.isNaN(c1));
console.log(d1 + " 은 NaN인가?" + Number.isNaN(d1));

console.log("반복 함수 repeat");
console.log('ㅋ'.repeat(5));
console.log("=".repeat(30));
console.log('*'.repeat(20));

var x = "20";
var y = "3.14";
console.log(x + y);
console.log(Number(x) + Number(y)); // 숫자로 parsing

