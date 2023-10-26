function average(arrOfMarks) {
  if (arrOfMarks.typeOf == Number) {
    console.log(arrOfMarks);
  }
}

let nums = [75.25, 65, 80, 35.45, 99.5];
// console.log(typeOf(nums))
let Numbers = nums.typeOf()
console.log(Numbers)

let result = average(nums);
console.log(result);
