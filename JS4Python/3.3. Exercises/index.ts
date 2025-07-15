class Fraction {
    private numerator: number;
    private denominator: number;

    constructor(numerator: number, denominator: number) {
        this.numerator = numerator
        this.denominator = denominator
    }

    private reduce(numerator: number, denominator: number): [number, number] {
        for (let i: number = Math.abs(numerator); i>1; i -= 1) {
            if (numerator % i === 0 && denominator % i === 0) {
                numerator = numerator / i;
                denominator = denominator / i;
                break;
            }
        }
        return [numerator, denominator];
    }

    public sub(numerator: number, denominator: number): [number, number] {
        const new_denominator: number = denominator * this.denominator;
        const from_num: number = this.numerator * denominator;
        const sub_num: number = numerator * this.denominator;
        const new_numerator: number = from_num - sub_num;
        return this.reduce(new_numerator, new_denominator);
    }

}

const frac = new Fraction(20, 100)
console.log(frac.sub(1,4))