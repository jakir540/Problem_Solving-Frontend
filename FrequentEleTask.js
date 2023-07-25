//Task 3: Write a JavaScript program to find the most frequent element in an array and return it.
//Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const arr = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const MostFrequent = (arr) => {
  console.log(arr);

  let start = 0;
  let end = arr.length - 1;
  let mostFrequentElement = []
  while (start <= end) {
    if (arr[start] == arr[end]) {
        mostFrequentElement.push(arr[start])
    }
    start++;
    end--

  }
  return mostFrequentElement;
};

const result = MostFrequent(arr);
console.log(result);
