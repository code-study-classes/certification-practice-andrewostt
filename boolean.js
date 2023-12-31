export function isPositive(A) {
  return A > 0;
}

export function isOdd(A) {
  return A % 2 !== 0;
}

export function checkInequality(A, B) {
  return A > 2 && B < 4;
}

export function checkInequality2(A, B) {
  return A >= 0 || B < -2;
}

export function checkBetweenNumbers(A, B, C) {
  return A < B && B < C;
}

export function checkOddThreeDigitNumber(number) {
  return Math.floor(number / 100) >= 1 && Math.floor(number / 100) < 10 && number % 2 !== 0;
}

export function checkUniqueDigits(number) {
  let str = String(number);
  if (str[0] === '-') {
    str = str.slice(1);
  }
  const digits = str.split('');
  if (digits.length > 3 || digits.length < 3) {
    return false;
  }
  const uniqueDigits = new Set(digits);
  return digits.length === uniqueDigits.size;
}

export function isSecondQuadrant(x, y) {
  return x < 0 && y > 0;
}

export function isIsoscelesTriangle(a, b, c) {
  if (a === 0 || b === 0 || c === 0) {
    return false;
  }
  return a === b || b === c || c === a;
}

export function areSameColorFields(x1, y1, x2, y2) {
  return (x1 + y1) % 2 === (x2 + y2) % 2;
}
