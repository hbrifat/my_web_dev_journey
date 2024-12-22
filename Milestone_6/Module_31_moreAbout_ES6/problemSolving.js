// array of odd numbers = [1, 3, 5, 7, 9]; convert them to array of even numbers i.e [2, 4, 6, 8, 10]
// use for loop, map

const oddNumberArr = [1,3,5,7,9];

const evenNumberArr = [];

for(let item of oddNumberArr) {
    item +=1;
    evenNumberArr.push(item);
}

console.log("Using for loop::", evenNumberArr);

const evenNumberArr2 = oddNumberArr.map((item) => item+=1);
console.log("Using map::",evenNumberArr2);


// array = [33, 50, 79, 78, 90, 101, 30]; return all the elements which're divisible by 10
// use array.filter
// use array.find & see the differences!


const numbers = [33, 50, 79, 90, 101, 30];

const divisibleByTen = numbers.filter((num) => num % 10 === 0);
console.log("Divisible by 10::", divisibleByTen);

const divisibleByTen_2 = numbers.find((num) => num%10 == 0);
console.log("Divisible by 10 using find() ::", divisibleByTen_2);
 

/* array of objects = [
    {name: 'Nodi', age: 28, position: 'Senior'}, 
    {name: 'Akil', age: 26, position: 'Junior'}, 
    {name: 'Shobuj', age: 30, position: 'Senior'},
    {name: 'Nadia', age: 22, position: 'Junior'}, 
    {name: 'okil kumar', age: 16, position: 'Junior'}, 
    {name: 'Shobuj biswas', age: 33, position: 'Senior'}
]

display the names that has the position senior using filter()

*/

const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'}, 
    {name: 'Akil', age: 26, position: 'Junior'}, 
    {name: 'Shobuj', age: 30, position: 'Senior'},
    {name: 'Nadia', age: 22, position: 'Junior'}, 
    {name: 'Kumar', age: 16, position: 'Junior'}, 
    {name: 'Biswas', age: 33, position: 'Senior'}
];

const seniorInstructor = instructor.filter((obj) => obj.position == 'Senior');

console.log("Senior Instructor names:: ", seniorInstructor.map((obj) => obj.name));



/* 
array of objects [
    {name: 'Ameena', age: 20}, {name: 'Rina', age: 15}, {name: 'Suchorita', age: 22}
]

1. find the total sum of their ages using for loop
2. find the total using reduce()

*/

const people = [
    {name: 'Ameena', age: 20}, 
    {name: 'Rina', age: 15}, 
    {name: 'Suchorita', age: 22}
]

let sumOfAges = 0;

for(let person of people){
    sumOfAges += person.age;
}

console.log("Sum of ages::", sumOfAges);

const sumOfAges2 = people.reduce((prev, current) => prev + current.age, 0);

console.log("Sum of ages using reduce ()::", sumOfAges2);
