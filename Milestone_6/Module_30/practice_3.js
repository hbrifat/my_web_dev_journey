const sumArrElements = (arr) => {
    let sum = 0;
    for(let item of arr){
        sum = sum + (item * item);
    }
    return (sum/arr.length);
}

const arr = [2, 4, 6, 8, 10];
const result = sumArrElements(arr);
console.log("Result::", result);
