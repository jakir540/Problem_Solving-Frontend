var getCommon = function (nums1, nums2) {
  let arr = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        console.log(nums1[i]);
        arr.push(nums1[i]);
      }
    }
  }
  if (arr.length > 0) {
    return arr[0];
  } else {
    return -1;
  }
};

let nums1 = [1, 2, 3, 6];
let nums2 = [2, 3, 4, 5];

let result = getCommon(nums1, nums2);
console.log(result);
