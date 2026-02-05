function calculateSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// Before function call
console.log('Before function call');

// Big loop (1 to 1,000,000)
const result = calculateSum(1_000_000);

// After function call
console.log('After function call');
console.log('Sum =', result);