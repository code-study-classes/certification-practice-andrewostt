import { fuchsia } from "color-name";

export function countUppercaseLetters(str) {
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
        if (/[A-Z]/.test(str[i])) {
            count += 1;
        }
    }
    return count;
}

export function combineStrings(N1, N2, S1, S2) {
    return `${S1.slice(0, N1)}${S2.slice(S2.length - N2)}`;
}

export function containsSubstring(S, S0) {
    return S.includes(S0);
}

export function replaceSubstring(S, S1, S2) {
    const index = S.indexOf(S1);
    if (index === -1) {
      return S;
    }
    const replacedString = S.substring(0, index) + S2 + S.substring(index + S1.length);
    return replacedString;
}

export function countWordsWithSameLetters(sentence) {
    const words = sentence.split(" ");
    let count = 0;
    if (sentence.trim().length === 0){
        return 0;
    }
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (word.charAt(0).toLowerCase() === word.charAt(word.length - 1).toLowerCase()) {
        count += 1;
      }
    }
    return count;
}

export function countWordsWithA(sentence) {
    let count = 0;
    const words = sentence.split(' ');
    if (sentence.trim().length === 0){
        return 0;
    }
    for (let i = 0; i < words.length; i += 1) {
        const word = words[i].toLowerCase();
        if (word.includes('a')) {
            count += 1;
        }

    }
    return count;
}

export function normalizeSpaces(sentence) {
    return sentence.replace(/\s+/g, ' ').trim();
}

export function extractFileName(fullFileName) {
    const words = fullFileName.split('/').pop();
    return words.split('.')[0];
}

export function encryptSentence(sentence) {
    let fPart = '';
    let sPart = '';
    for (let i = 1; i < sentence.length; i += 2) {
        fPart = `${fPart}${sentence[i]}`;
    }
    for (let i = 0; i < sentence.length; i += 2) {
        sPart = `${sentence[i]}${sPart}`;
    }
    return `${fPart}${sPart}`;
}

export function checkBrackets(expression) {
    let stack = [];
    let stack1 = [];
    let stack2 = [];

    if (expression.trim().length === 0) {
        return 0;
    }
    
    for(let i = 0; i < expression.length; i++) {
      if(expression[i] === '(') {
        stack.push(i);
      } else if(expression[i] === ')') {
        if(stack.length === 0) {
          return i;
        }
        stack.pop();
      }
      if(expression[i] === '[') {
        stack1.push(i);
      } else if(expression[i] === ']') {
        if(stack1.length === 0) {
          return i;
        }
        stack1.pop();
      }
      if(expression[i] === '{') {
        stack2.push(i);
      } else if(expression[i] === '}') {
        if(stack2.length === 0) {
          return i;
        }
        stack2.pop();
      }
    }
    
    if(stack.length === 0 && stack1.length === 0 && stack2.length === 0) {
      return 0; // Скобки расставлены правильно
    } else {
      return -1; // Закрывающих скобок не хватает
    }
  }