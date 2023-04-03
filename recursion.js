/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) { // base case: empty array
    return 1;
  }
  return nums[0] * product(nums.slice(1)); // recursive case
}


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 0) { // base case: empty array
    return 0;
  }
  const restLongest = longest(words.slice(1)); // recursive case
  return Math.max(words[0].length, restLongest);
}


/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length === 0) { // base case: empty string
    return '';
  }
  return str[0] + everyOther(str.slice(2)); // recursive case
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length <= 1) { // base case: string has length 0 or 1
    return true;
  }
  if (str[0] !== str[str.length - 1]) { // base case: first and last characters are different
    return false;
  }
  return isPalindrome(str.slice(1, -1)); // recursive case
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  if (index >= arr.length) { // base case: value not found
    return -1;
  }
  if (arr[index] === val) { // base case: value found
    return index;
  }
  return findIndex(arr, val, index + 1); // recursive case
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length === 0) { // base case: empty string
    return '';
  }
  return str[str.length - 1] + revString(str.slice(0, -1)); // recursive case
}


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') { // base case: value is a string
      result.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) { // recursive case: value is an object
      result = result.concat(gatherStrings(obj[key]));
    }
  }
  return result;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start = 0, end = arr.length - 1) {
  if (start > end) { // base case: value not found
    return -1;
  }
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === val) { // base case: value found
    return mid;
  }
  if (arr[mid] < val) { // recursive case: search right half
    return binarySearch(arr, val, mid + 1, end);
  }
  // recursive case: search left half
  return binarySearch(arr, val, start, mid - 1);
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
