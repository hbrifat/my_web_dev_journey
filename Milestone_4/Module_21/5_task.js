function odd_even(number){
    if(number % 2 === 0){
        return "Even";
    } else if(number % 2 === 1){
        return "Odd";
    }
}

const num = 22;
const result = odd_even(num);
console.log(result);
