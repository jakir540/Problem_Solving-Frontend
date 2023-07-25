//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array

const arr = [2, -5, 10, -3, 7]; //19

const SumElement = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] > 0) {
    //   console.log(arr[i]);
      sum += arr[i];
    }
  }
  return sum;
};

const result = SumElement(arr);
console.log(result);
