let numbers = [1, 2, 3, 4, 5];
let processed = numbers.map(function(num){
  return num * num;
});

console.log(processed);

const colors = ['red', 'green', 'blue', 'orange'];
colors.map(function(color, index){
  console.log(`색상: ${color}, 순번: ${index}`);
});

