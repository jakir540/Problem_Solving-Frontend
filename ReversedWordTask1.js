//Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

const ReverseWord = (str) => {
  const stringArr = str.toLowerCase().split("");

  let temp;
  for (let i = 0; i < stringArr.length; i++) {
    for (let j = i + 1; j < stringArr.length; j++) {
      temp = stringArr[i];
      stringArr[i] = stringArr[j];
      stringArr[j] = temp;
    }
  }
  return stringArr.join("");
};

const result = ReverseWord("hello world");
console.log(result);
