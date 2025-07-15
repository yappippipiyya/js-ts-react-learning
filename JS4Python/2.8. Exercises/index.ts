function sumlist(l: number[]): number {
    let total: number = 0;
    for (const num of l) {
        total += num;
    }
    return total;
}


function getMax(l: number[]): number {
    let maxNum: number = l[0];
    for (const num of l) {
        if (maxNum < num) {
            maxNum = num;
        }
    }
    return maxNum;
}


function getPrimeNumbers(limit: number = 10): number[] {
    let primeNumbers: number[] = [];
    for (let i: number = 0; i < limit; i++) {
        let isPrimeNumber: boolean = true;
        const num: number = i + 1;

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

function removeLetter(letter: string, message: string): string {
    const chars: string[] = Array.from(message);
    let new_message_array: string[] = [];
    for (const x of chars) {
        if (x !== letter) {
            new_message_array.push(x)
        }
    }
    return new_message_array.join("");
}


function getReversedString(message: string): string {
    return Array.from(message).reverse().join("");
}


function getDigits(num: number): number {
    return num.toString().length;
}


function isPalindromes(message: string): boolean {
    const reversedString: string = getReversedString(message)
    return message === reversedString;
}