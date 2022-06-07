// 비교 연산자
let a = 6;
let b = "6";
console.log(a, b);
console.log(Object.is(a, b)); // false

// 동등 연산자
console.log(a == b);    // 값으로만 비교
console.log(a === b);   // 타입까지도 같아야 true

console.log(`a의 타입은 ${typeof(a)} 입니다.`);
console.log(`b의 타입은 ${typeof(b)} 입니다.`);