function findLongestWord(str){
    const strToArr = str.split(" ");
    console.log(strToArr);

    let largest = "";

    for(let item of strToArr){
        if(item.length > largest.length){
            largest = item;
        }
    }
    return largest;  
}


const str = "I am learning Programming to become a programmer";

const findLongest = findLongestWord(str);
console.log(findLongest);




