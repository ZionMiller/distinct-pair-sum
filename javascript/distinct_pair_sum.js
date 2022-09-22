function distinctPairSum(arr, k) {
  // FIRST WAY (This could be o(nlogn) though
  // first issue is that the arrary is unsorted
  // we can sort the array
  // Once its sorted, we have two pointers that look at the beginning and the end
  // Loop while checking the first and last pointers sum and moving them closer 
  // to the middle  each loop until they aare looking at the same number
  // if the sum is k, then check if its in our output and add it
  // return output

  // SECOND WAY o(n)
  // create a pair tracking object
  // iterate through arr
  //  for each loop
  //  check if the current plus the next value is k
  //  AND check if we've alredy seeen the current value in our obj
  //  AND check if we've already seen the NEXT value in our obj
  // After the loop return all the pairs as an array from the obj

  const pairs = {}

  for (let i = 0; i < arr.length - 2; i++) {
    const current = arr[i]
    const next = arr[i + 1]
    const currentSum = current + next

    if(currentSum === k && !pairs[current] && !pairs[next]){
      pairs[current] = [current, next]
    }
    return Object.values(pairs)
  }

}

console.clear()
console.log("TESTING>>>")
let arr1 = [0, 1, 1, 2, 0, 1, 1]
console.log(distinctPairSum(arr1, 2))
// Output: [[1, 2], [2, 0]]

let arr2 = [3, 4, 2, 1, 5, 2, 8, 2]
// [1, 2, 2, 2, 3, 4, 5, 8]
console.log(distinctPairSum(arr2, 10))
// Output: [[2, 8]]



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

// Please add your pseudocode to this file
// And a written explanation of your solution
