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

const result = RomanToIntger("LVIII");
console.log(result);



