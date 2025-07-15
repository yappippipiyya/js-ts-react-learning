"use strict";
function sumlist(l) {
    let total = 0;
    for (const num of l) {
        total += num;
    }
    return total;
}
function getMax(l) {
    let maxNum = l[0];
    for (const num of l) {
        if (maxNum < num) {
            maxNum = num;
        }
    }
    return maxNum;
}
function getPrimeNumbers(limit = 10) {
    let primeNumbers = [];
    for (let i = 0; i < limit; i++) {
        let isPrimeNumber = true;
        const num = i + 1;
        for (const primeNumber of primeNumbers) {
            if (primeNumber === 1) {
                continue;
            }
            if (Math.sqrt(num) < primeNumber) {
                break;
            }
            if (num % primeNumber === 0) {
                isPrimeNumber = false;
                break;
            }
        }
        if (isPrimeNumber) {
            primeNumbers.push(num);
        }
    }
    return primeNumbers;
}
function removeLetter(letter, message) {
    const chars = Array.from(message);
    let new_message_array = [];
    for (const x of chars) {
        if (x !== letter) {
            new_message_array.push(x);
        }
    }
    return new_message_array.join("");
}
function getReversedString(message) {
    return Array.from(message).reverse().join("");
}
function getDigits(num) {
    return num.toString().length;
}
function isPalindromes(message) {
    const reversedString = getReversedString(message);
    return message === reversedString;
}
