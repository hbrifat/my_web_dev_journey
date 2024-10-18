function checkEvenOdd(number){
    let result = 0;
    if(number < 1) return "Enter valid number!";

    else if(number % 2 == 1){
        result = number * 2;
        return result;
    } else if(number % 2 == 0){
        result = number / 2;
        return result;
    }
}

const result = checkEvenOdd(.6);
console.log(result);
