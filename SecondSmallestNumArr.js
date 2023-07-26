// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number

const arr = [150, 120, 120, 180, 180, 910, 130, 60, 60];

const secondSmallest = (arr) => {
  const sortArr = arr.sort((a, b) => {
    return a - b;
  });

  let secondNumber;
  for (let i = 0; i < sortArr.length; i++) {
    
    if (sortArr[i] !== sortArr[i + 1]) {
      secondNumber = sortArr[i + 1];
      break;
    }
  }
  return secondNumber;
};
const result = secondSmallest(arr);
console.log(result);
