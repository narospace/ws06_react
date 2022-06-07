// 함수 파라미터에 기본값이 가능하다

function func1(x, y=200, z=300){
  console.log(x, y, z);
}

func1(3, 5, 6);
func1(100);
func1(2, 5);
func1(); // undefined 200 300 (에러가 발생하지 않는다)

function func2(a, b){
  return a + b;
}

let r1 = func2(5, 6);
console.log("r1 = " + r1);

// 배열
let arr = [2, 5, 9];
let r2 = func2(arr[0], arr[1]);
console.log("r2 = " + r2);

// ... : es6에서 추가된 기능, 펼침연산자 자주 사용
func1(arr[0], arr[1], arr[2]);
func1(...arr);

let r3 = func2(...arr); // 앞의 2개 값이 넘어간다
console.log("r3 = ", r3);