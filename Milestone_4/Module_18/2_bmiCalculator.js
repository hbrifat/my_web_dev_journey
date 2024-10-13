// BMI = weight (kg) / (height (m) )^2


let yourWeight = 62;
let yourHeight = 1.62;
let yourBMI = (yourWeight / (yourHeight^2));

if(yourBMI < 18.5){
    console.log("You're underweight!");
} else if(yourBMI >= 18.5 && yourBMI <= 24.9){
    console.log("You're normal!");
} else if(yourBMI >= 25 && yourBMI <= 29.9) {
    console.log("You're overweight!");
} else {
    console.log("You're obese!");
}

