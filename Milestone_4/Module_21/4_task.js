function count_zero(binary_str){
    let count = 0;
    for(let value of binary_str){
        if(value === "0"){
            count++;
        }
    }
    return count;
}


const binaryString = "0001010011";
const zeroCount = count_zero(binaryString);
console.log("No. of Zero in string::", zeroCount);
