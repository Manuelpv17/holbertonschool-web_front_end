const { performance } = require("perf_hooks");

const t0 = performance.now();
for (let i = 0; i < 100; i++) {
  console.log(countPrimeNumbers());
}
const t1 = performance.now();
console.log(
  `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
);

function countPrimeNumbers() {
  prime_numbers = [2];
  for (let num = 3; num < 100; num += 2) {
    flag = 0;
    for (let j = 0; j < prime_numbers.length; j++) {
      if (num % prime_numbers[j] === 0) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      prime_numbers.push(num);
    }
  }
  return prime_numbers.length;
}
