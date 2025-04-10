function countTotalSalary(employees) {
    let totalSum = 0;
    for(const [, salary] of Object.entries(employees)) {
        totalSum += salary
    }
    return totalSum
}
const employees = {
    "John": 5000,
    "Alice": 6000,
    "Bob": 5500,
    "Mary": 7000
};

console.log(countTotalSalary(employees))