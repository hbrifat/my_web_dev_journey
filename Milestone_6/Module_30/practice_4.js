const findMax = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2];
    let maxNum = Math.max(...newArr);
    return maxNum;
}


const number1 = [45, 5, 87, 41, 36];
const number2 = [23, 43, 99, 9, 40, 34];
const result = findMax(number1, number2);

console.log(result);


