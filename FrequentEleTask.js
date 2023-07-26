//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const arr = [3, 5, 2, 5, 3, 3, 3];

const MostFrequent = (array) => {
  let Match = 0;
  let totalMatch = 1;
  let mostFreqElem;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        Match++;
        if (totalMatch < Match) {
          totalMatch = Match;
          mostFreqElem = arr[i];
        }
      }
    }
    Match = 0;
  }
  return mostFreqElem;
};

const result = MostFrequent(arr);
console.log(result);
