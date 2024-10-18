function countRepeatedNumber(arr, num){
    let count = 0;
    for(let item of arr){
        if(item === num){
            count++;
        }
    }
    return count;
}

const numbers = [5,6,11,12,98,5];
const find = 25;
const countResult = countRepeatedNumber(numbers, find);

console.log(countResult);
