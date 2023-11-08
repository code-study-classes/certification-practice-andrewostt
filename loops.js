export function sumOfSquares(A, B) {
  let sum = 0;
  for (let i = A; i <= B; i += 1) {
    sum += i ** 2;
  }
  return sum;
}

export function power(A, N) {
  let sum = A;
  for (let i = 1; i < N; i += 1) {
    sum *= A;
  }
  return sum;
}

export function factorialProduct(N) {
  let sum = 1;
  for (let i = 1; i <= N; i += 1) {
    sum *= i;
  }
  return sum;
}

export function fibonacciSequence(N) {
  let prev = 0;
  let curr = 1;
  for (let i = 2; i <= N; i += 1) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}

export function sumOfPowers(N) {
  let sum = 0;
  for (let i = 1; i <= N; i += 1) {
    sum += i ** i;
  }
  return sum;
}

export function remainingLength(A, B) {
  let sum = A;
  while (sum >= B) {
    sum -= B;
  }
  return sum;
}

export function findExponent(N) {
  let K = 0;
  let n = N;
  while (n > 1) {
    n /= 2;
    K += 1;
  }
  return K;
}

export function findMinKAndSum(N) {
  let sum = 0;
  let K = 1;
  while (sum < N) {
    sum += K;
    K += 1;
  }
  return K - 1;
}

export function calculateGCD(A, B) {
  let a = A;
  let b = B;
  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }
  return a;
}

export function findFibonacciIndex(N) {
  let a = 0;
  let b = 1;
  let index = 1;
  while (b < N) {
    const next = a + b;
    a = b;
    b = next;
    index += 1;
  }
  if (b === N) {
    return index;
  }
  return -1;
}
