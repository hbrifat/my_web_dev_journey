const allStudents = [
    {name: 'hb', avgMarks: 49, fiftyPercent: true},
    {name: 'gh', avgMarks: 39, fiftyPercent: true},
    {name: 'thjh', avgMarks: 59, fiftyPercent: false},
    {name: 'hwse', avgMarks: 69, fiftyPercent: false},
   {name: 'hbrtg', avgMarks: 79, fiftyPercent: true},
    {name: 'ghsdfc', avgMarks: 29, fiftyPercent: true},
    {name: 'thjhxsw', avgMarks: 89, fiftyPercent: true},
    {name: 'hwsebhs', avgMarks: 69, fiftyPercent: false},
]

// const scic = allStudents.filter(({avgMarks, fiftyPercent}) => avgMarks >= 48 && fiftyPercent === true);
// console.log("SCIC winners::", scic);


const findSCIC = (allStudents) => {
    const scic = allStudents.filter(
        (stu) => stu.avgMarks >= 48 && stu.fiftyPercent === true);
    return scic;
}

const result = findSCIC(allStudents);
// const names = result.map((target) => target.name);
// console.log(names);
// console.log(result);

const showOne = Math.floor(Math.random() * result.length);
console.log(result[showOne].name);
