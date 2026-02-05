function calculateSum(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

// Before function call
console.log('Before function call');

// Using setTimeout (async)
setTimeout(() => {
  const result = calculateSum(1_000_000);
  console.log('Sum =', result);
}, 0);

// After function call
console.log('After function call');
