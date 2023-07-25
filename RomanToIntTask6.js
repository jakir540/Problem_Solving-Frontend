//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const RomanToIntger = (romanString) => {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  let prevValue = 0;

  for (let i = romanString.length - 1; i >= 0; i--) {
    const str = romanString[i];
    console.log(str)
    const CValue = romanValue[str];
    console.log(CValue);
    if (CValue < prevValue) {
      sum = sum - CValue;
      console.log(sum)
    } else {
      sum += CValue;
    }
    prevValue = CValue;
  }
  return sum;
};

const result = RomanToIntger("IX");
console.log(result);

// function romanToInteger(s) {
//   const romanToInt = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };

//   let result = 0;
//   let prevValue = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     const char = s[i];
//     const currentValue = romanToInt[char];
//     console.log(currentValue)

//     if (currentValue < prevValue) {
//       result -= currentValue;
//       console.log(result )
//     } else {
//       result += currentValue;
//     }

//     prevValue = currentValue;
//   }

//   return result;
// }

// Test cases
// console.log(romanToInteger("IX"));   // Output: 9
// console.log(romanToInteger("XXI"));  // Output: 21
// console.log(romanToInteger("IV"));   // Output: 4
// console.log(romanToInteger("XC"));   // Output: 90
// console.log(romanToInteger("MCMXCIV")); // Output: 1994
