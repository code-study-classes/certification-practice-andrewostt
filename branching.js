export function incrementIfPositive(number) {
    if (number > 0) {
        return number + 1;
    }
    return number;
}

export function getIndexOfSmallerNumber(number1, number2) {
    if (number1 > number2) {
        return 2;
    }
    if (number2 > number1) {
        return 1;
    }
    if (number1 === number2) {
        return 1;
    }
}

export function findMiddleNumber(number1, number2, number3) {
    let min = Math.min(number1, number2, number3);
    let max = Math.max(number1, number2, number3);
    return number1 + number2 + number3 - min - max;
}

export function findUniqueNumber(number1, number2, number3, number4) {
    if (number1 !== number2 && number1 !== number3 && number1 !== number4) {
        return 1;
    } else if (number2 !== number1 && number2 !== number3 && number2 !== number4) {
        return 2;
    } else if (number3 !== number1 && number3 !== number2 && number3 !== number4) {
        return 3;
    } else {
        return 4;
    }
}

export function calculateF(x) {
    if (x < 0) {
      return 0;
    } if (x % 2 >= 0 && x % 2 < 1) {
      return 1;
    }
    return -1;
}

export function describeNumber(n) {
    if (n < 10 && n % 2 !== 0) {
        return 'нечетное однозначное число';
    }
    if (n < 10 && n % 2 === 0) {
        return 'четное однозначное число';
    }
    if (n < 100 && n > 9 && n % 2 !== 0) {
        return 'нечетное двузначное число';
    }
    if (n < 100 && n > 9 && n % 2 === 0) {
        return 'четное двузначное число';
    }
    if (n < 1000 && n > 99 && n % 2 !== 0) {
        return 'нечетное трехзначное число';
    }
    if (n < 1000 && n > 99 && n % 2 === 0) {
        return 'четное трехзначное число';
    }
}

export function getDayName(dayNumber) {
    var dayName;
    switch(dayNumber) {
        case 1:
            dayName = 'Monday';
            break;
        case 2:
            dayName = 'Tuesday';
            break;
        case 3:
            dayName = 'Wednesday';
            break;
        case 4:
            dayName = 'Thursday';
            break;
        case 5:
            dayName = 'Friday';
            break;
        case 6:
            dayName = 'Saturday';
            break;
        case 7:
            dayName = 'Sunday';
            break;
        default:
            dayName = 'Invalid day number.';
    }
    return dayName;
}

export function convertToMeters(unitNumber, lengthInUnits) {
    var sum;
    switch(unitNumber) {
        case 1:
            sum = lengthInUnits * 0.1;
            break;
        case 2:
            sum = lengthInUnits * 1000;
            break;
        case 3:
            sum = lengthInUnits;
            break;
        case 4:
            sum = lengthInUnits * 0.001;
            break; 
        case 5:
            sum = lengthInUnits * 0.01;
            break;
    }
    return sum;
}

export function describeAge(age) {
    var textAge;
    var twenty = 'двадцать';
    var thirty = 'тридцать';
    var fourty = 'сорок';
    var fifty = 'пятьдесят';
    var sixty = 'шестьдесят';
    var one = ' один';
    var two = ' два';
    var three = ' три';
    var four = ' четыре';
    var five = ' пять';
    var six = ' шесть';
    var seven = ' семь';
    var eight = ' восемь';
    var nine = ' девять';
    var year = ' лет';
    var year1 = ' год';
    var year2 = ' года';
    switch(age) {
        case 20:
            textAge = twenty + year;
            break;
        case 21:
            textAge = twenty + one + year1;
            break;
        case 22:
            textAge = twenty + two + year2;
            break;
        case 23:
            textAge = twenty + three + year2;
            break;
        case 24:
            textAge = twenty + four + year2;
            break;
        case 25:
            textAge = twenty + five + year;
            break;
        case 26:
            textAge = twenty + six + year;
            break;
        case 27:
            textAge = twenty + seven + year;
            break;
        case 28:
            textAge = twenty + eight + year;
            break;
        case 29:
            textAge = twenty + nine + year;
        case 30:
            textAge = thirty + year;
            break
        case 31:
            textAge = thirty + one + year1;
            break;
        case 32:
            textAge = thirty + two + year2;
            break;
        case 33:
            textAge = thirty + three + year2;
            break;
        case 34:
            textAge = thirty + four + year2;
            break;
        case 35:
            textAge = thirty + five + year;
            break;
        case 36:
            textAge = thirty + six + year;
            break;
        case 37:
            textAge = thirty + seven + year;
            break;
        case 38:
            textAge = thirty + eight + year;
            break;
        case 39:
            textAge = thirty + nine + year;
            break;
        case 40:
            textAge = fourty + year;
            break;
        case 41:
            textAge = fourty + one + year1;
            break;
        case 42:
            textAge = fourty + two + year2;
            break;
        case 43:
            textAge = fourty + three + year2;
            break;
        case 44:
            textAge = fourty + four + year2;
            break;
        case 45:
            textAge = fourty + five + year;
            break;
        case 46:
            textAge = fourty + six + year;
            break;
        case 47:
            textAge = fourty + seven + year;
            break;
        case 48:
            textAge = fourty + eight + year;
            break;
        case 49:
            textAge = fourty + nine + year;
            break;
        case 50:
            textAge = fifty + year;
            break;
        case 51:
            textAge = fifty + one + year1;
            break;
        case 52:
            textAge = fifty + two + year2;
            break;
        case 53:
            textAge = fifty + three + year2;
            break;
        case 54:
            textAge = fifty + four + year;
            break;
        case 55:
            textAge = fifty + five + year;
            break;
        case 56:
            textAge = fifty + six + year;
            break;
        case 57:
            textAge = fifty + seven + year;
            break;
        case 58:
            textAge = fifty + eight + year;
            break;
        case 59:
            textAge = fifty + nine + year;
            break;
        case 60:
            textAge = sixty + year;
            break;
        case 61:
            textAge = sixty + one + year1;
            break;
        case 62:
            textAge = sixty + two + year2;
            break;
        case 63:
            textAge = sixty + three + year2;
            break;
        case 64:
            textAge = sixty + four + year2;
            break;
        case 65:
            textAge = sixty + five + year;
            break;
        case 66:
            textAge = sixty + six + year;
            break;
        case 67:
            textAge = sixty + seven + year;
            break;
        case 68:
            textAge = sixty + eight + year;
            break;
        case 69:
            textAge = sixty + nine + year;
            break;
    }
    return textAge;
}


export function describeNumber2(number) {
    let description = '';
    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const units = number % 10;
    switch (hundreds) {
      case 1:
        description += 'сто ';
        break;
      case 2:
        description += 'двести ';
        break;
      case 3:
        description += 'триста ';
        break;
      case 4:
        description += 'четыреста ';
        break;
      case 5:
        description += 'пятьсот ';
        break;
      case 6:
        description += 'шестьсот ';
        break;
      case 7:
        description += 'семьсот ';
        break;
      case 8:
        description += 'восемьсот ';
        break;
      case 9:
        description += 'девятьсот ';
        break;
    }
      switch (tens) {
      case 2:
          description += 'двадцать ';
          break;
        case 3:
          description += 'тридцать ';
          break;
        case 4:
          description += 'сорок ';
          break;
        case 5:
          description += 'пятьдесят ';
          break;
        case 6:
          description += 'шестьдесят ';
          break;
        case 7:
          description += 'семьдесят ';
          break;
        case 8:
          description += 'восемьдесят ';
          break;
        case 9:
          description += 'девяносто ';
          break;
      }
      switch (units) {
        case 1:
          description += 'одиннадцать';
          break;
        case 2:
          description += 'два';
          break;
        case 3:
          description += 'три';
          break;
        case 4:
          description += 'четыре';
          break;
        case 5:
          description += 'пять';
          break;
        case 6:
          description += 'шесть';
          break;
        case 7:
          description += 'семь';
          break;
        case 8:
          description += 'восемь';
          break;
        case 9:
          description += 'девять';
        break;
    }
    return description.trim();
}