function sumAll(arr) {
  const totalNumbers = arr[1] - arr[0];
  let sum = 0;
  for (let i = 0; i < totalNumbers; i++) {
    sum += arr[0] + arr[i];
  }
  return sum;
}
console.log(sumAll([1, 3]));
