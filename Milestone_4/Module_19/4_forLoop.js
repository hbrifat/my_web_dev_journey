// for(let num = 0; num <=5; num++){
//     console.log(num);
// }

// let sum = 0;

// for(let num1 = 0; num1<100; num1++){
//     sum = sum + num1;
//     console.log(sum);
// }


// Find all the odd numbers from 61 to 100

for(let num=61; num<=100; num++){
    // console.log(num);
    if(num%2 === 1){
        console.log("Odd Numbers::", num);
    }
}

console.log("\nSeperator =>=>=> \n");


// Find all the even numbers from 78 to 98

for(let num1=78; num1<= 98; num1++){
    if(num1%2 === 0){
        console.log("Even Numbers::", num1);
        
    }
}

console.log("\nSeparator=>=>=>\n");

//Find sum of all numbers from 91 to 129

let sum = 0;

for(let num2=91; num2<=129; num2++){
    if(num2%2 === 1){
        console.log("Odd Number::", num2);
        sum = sum + num2;
        console.log("Sum::", sum);
    }    
}


console.log("\nSeparator=>=>=>\n");


//Display sum of all the even numbers from 51 to 85

let sumOfEven = 0;

for(let i=51; i<=85; i++){
    if(i%2 === 0){
        console.log("Even Number::", i);
        sumOfEven = sumOfEven + i;
    }
    console.log("Sum::", sumOfEven);
}
