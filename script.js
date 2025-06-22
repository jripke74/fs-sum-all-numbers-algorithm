function sumAll(arr) {
  let totalNumbers = 0;
  let start;
  if (arr[0] > arr[1]) {
    totalNumbers = arr[0] - arr[1];
    start = arr[1];
  } else {
    totalNumbers = arr[1] - arr[0];
    start = arr[0];
  }
  let sum = start;
  for (let i = 1; i <= totalNumbers; i++) {
    start++;
    sum += start;
  }
  return sum;
}
console.log(sumAll([5, 10]));