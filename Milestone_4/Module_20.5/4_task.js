const statement = 'I am a hard working person';
console.log("Array::", statement);


let statementToArr = statement.split(" ");
// let statementToArr = Array.from(statement);

// console.log(statementToArr);

let revArr = [];

// One way to reverse the position

for(let i=statementToArr.length-1; i>=0; i--){
    revArr = revArr + statementToArr[i] + " ";
    // console.log(revArr);   
}

console.log("Reverse positioned Arr::", revArr);



// other way to reverse the position

// for(let i=0; i<statementToArr.length; i++){
//     revArr.unshift(statementToArr[i]) + " ";
// }
// revArrToStr = revArr.join(" ");



// console.log(revArrToStr);

