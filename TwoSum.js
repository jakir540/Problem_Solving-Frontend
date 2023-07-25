//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.



//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
// --------------------------using traditional for loop--------------
// const TwoSum = (arr, target) => {

//   for(let i = 0; i< arr.length; i++){
//     for (let j = i+1; j < arr.length; j++) {

//       let sum = arr[i] + arr[j];
//       if (sum == target) {
//         return [i,j]
//       }

//     }
//   }

// };











// ----------------------------------using two pointer algorith approch----------------
const arr = [1, 3, 6, 8, 11, 15];

const TwoSum = (array, target) => {
  
  let i = 0;
  let j = array.length - 1;

  while (i < j) {
    let sum = array[i] + array[j];
    console.log(sum);

    if (sum === target) {
      return [i, j];
    } else if (sum > target) {
      j--;
    } else {
      i++;
    }
  }
  return [];
};

const result = TwoSum(arr, 9);
console.log(result);
