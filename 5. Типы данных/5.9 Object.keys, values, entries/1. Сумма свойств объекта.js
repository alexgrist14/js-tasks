function sumSalaries(salaries) {
    let sum = 0;
    for (const value of Object.values(salaries)) {
        sum += value;
    }
    return sum;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) );