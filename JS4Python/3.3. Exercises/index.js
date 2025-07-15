"use strict";
class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }
    reduce(numerator, denominator) {
        for (let i = Math.abs(numerator); i > 1; i -= 1) {
            if (numerator % i === 0 && denominator % i === 0) {
                numerator = numerator / i;
                denominator = denominator / i;
                break;
            }
        }
        return [numerator, denominator];
    }
    sub(numerator, denominator) {
        const new_denominator = denominator * this.denominator;
        const from_num = this.numerator * denominator;
        const sub_num = numerator * this.denominator;
        const new_numerator = from_num - sub_num;
        return this.reduce(new_numerator, new_denominator);
    }
}
const frac = new Fraction(20, 100);
console.log(frac.sub(1, 4));
