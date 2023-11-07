import { fn } from "jest-mock";

export function calculateDistance(x1, x2) {
    return Math.abs(x2 - x1);
}

export function calculateSegmentProduct(A, B, C) {
    return Math.abs(C - A) * Math.abs(C - B);
}

export function calculateKilobytes(fileSizeInBytes) {
    return Math.floor(fileSizeInBytes / 1024);
}

export function calculateSegments(lengthA, lengthB) {
    return Math.floor(lengthA / lengthB);
}

export function calculateDigitSum(twoDigitNumbers) {
    return parseInt(twoDigitNumbers.toString()[0]) + parseInt(twoDigitNumbers.toString()[1]);
}

export function swapHundredsAndTens(twoDigitNumbers) {
    return parseInt(`${twoDigitNumbers.toString()[1]}${twoDigitNumbers.toString()[0]}${twoDigitNumbers.toString()[2]}`);
}

export function getHundredsDigit(number) {
    if (number < 999) {
        return 0;
    }
    const bruh = number.toString();
    const finalNum = bruh[bruh.length - 3];
    return parseInt(finalNum);
}

export function getFullHours(seconds) {
    if (seconds < 60) {
        return seconds;
    }
    if (seconds < 3600) {
        return Math.floor(seconds / 60);
    }
    return Math.floor(seconds / 3600);
}

export function getDayOfWeek(dayOfYear) {
    return dayOfYear % 7;
}

export function countSquares(A, B, C) {
    return Math.floor((A * B) / (C * C)) - ((A * B) % (C * C));
}