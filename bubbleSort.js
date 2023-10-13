let arr = [11, 4, 7, 9, 11, 15, 1, 3];


const bubbleSort = (inputOne) => {
  let n = inputOne.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (inputOne[j] > inputOne[j + 1]) {
        let tmp = inputOne[j]
        inputOne[j] =  inputOne[j + 1]
        inputOne[j + 1] = tmp
      }
    }
  }
  return inputOne;
};
console.log(bubbleSort(arr));