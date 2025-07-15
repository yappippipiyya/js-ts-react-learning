function doubleNumber(numbers: number[]): number[] {
    return numbers.map(num => num * 2);
}


function upperFive(numbers: number[]): number[] {
    return numbers.filter(num => num > 5);
}


const data = [
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 24 },
    { id: 3, name: "Charlie", age: 35 }
]
function returnName(data: { id: number, name: string, age: number }[]): string[] {
    return data.map(data => data.name);
}
