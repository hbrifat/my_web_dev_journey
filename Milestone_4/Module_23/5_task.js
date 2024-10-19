function calculateTotalSalary(arr){
    let totalSalary = 0;
    for(let person of arr){
        let personCurrentSalary = person.starting + (person.experience * person.increment);
        totalSalary += personCurrentSalary;
    }
    return totalSalary;
}


const employees = [
    {name: "shahin", experience: 5, starting: 20000, increment: 5000},
    {name: "shihab", experience: 3, starting: 15000, increment: 7000},
    {name: "shikot", experience: 9, starting: 30000, increment: 1000},
    {name: "shohel", experience: 0, starting: 29000, increment: 4000},
]

const Total_Salary = calculateTotalSalary(employees);

console.log("Total Salary paid by employers::", Total_Salary);

