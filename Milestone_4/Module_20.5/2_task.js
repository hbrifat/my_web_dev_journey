const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];

for(let num of numbers){
    // console.log(num);
    if(num%2 == 0){
        // console.log(num);
        evenNumbers.push(num);
    }
}

console.log("Even Numbers::", evenNumbers);
