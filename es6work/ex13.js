// 컬렉션 set, map
let set = new Set("abcdabcdxxxyyy"); // 중복된 문자는 걸러냄
console.log(set);

// set 에 추가
set.add("z"); // 추가
console.log(set);
console.log(set.has("x")); // x를 포함하고 있으면 true
console.log(set.has("!")); // x를 포함하고 있으면 true
console.log("길이: " + set.size); // 길이
console.log(...set); 
set.delete("a"); // 삭제
console.log(...set); // 조회
set.clear(); // 전체 삭제
console.log(set.size);

console.log("여기서부터는 Map");
let map = new Map();
let a = {n:1}; // json type
map.set(a, "A"); // key가 json 타입 가능
map.set("2", 9);
map.set("2", 11);

console.log(map);
console.log(...map);
console.log(map.has("2")); // 2라는  key값이 존재하는가?

map.delete("2"); // key가 2인 데이터 삭제
console.log(map);

map.clear(); // 전체 삭제
console.log(map);