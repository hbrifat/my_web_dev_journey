let string = "javascriptMAsteryTechnicAlSunejaGreatStack";

let count = 0;

for(let i=0; i<string.length; i++){
    if(string[i] == 'a' || string[i] == 'A'){
        count++;
    }
}

// console.log("Count::", count);


let STRING = string.toUpperCase();

// console.log(STRING);

count = 0;

for(i=0; i<STRING.length; i++){
    if(STRING[i] == 'A'){
        count++;
    }
}

// console.log("Count => ", count);

let numOf_a = 0;
let numOf_A = 0;

// for(let  l=0; l<string.length; l++){
//     if(string[l] == 'a'){
//         numOf_a++;
//     } else if(string[l] == 'A'){
//         numOf_A++;
//     }
// }

// for(let item of string){
//     console.log(item); 
// }

let numberOf_a = string.split('a').length - 1;
console.log("Number of a =>", numberOf_a);

let numberOf_A = string.split('A').length - 1;
console.log("Number of A =>", numberOf_A);



// console.log("Num of a::", numOf_a);
// console.log("Num of A::", numOf_A);

// console.log(string.length);






