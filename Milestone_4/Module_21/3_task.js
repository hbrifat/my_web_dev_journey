function make_avg(arr, size){
    let sum = 0;
    for(let item of arr){
        sum = sum + item;
    }
    let avg = sum / size;
    return avg;
}


const array = [12, 5, 8, 9];
const size = array.length;

const avg = make_avg(array, size);
console.log("Average::", avg);
