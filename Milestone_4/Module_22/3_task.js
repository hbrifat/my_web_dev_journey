function countVowels(string){
    let count = 0;

    // one way

    for(let item of string){
        // console.log(item);
        if(item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u'){
            count++;
        }  
    }

    return count;
}

const str = "welcome to the world of programming! Hello javascript";

const countVowelsInStr = countVowels(str.toLowerCase());

console.log("Number of Vowels::", countVowelsInStr);


