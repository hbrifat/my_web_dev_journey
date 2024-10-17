let string = "javascriptMAsteryTechnicAlSunejaGreatStack";

let count = 0;

for(let i=0; i<string.length; i++){
    if(string[i] == 'a'){
        count++;
    }
}

console.log("a Count::", count);


let STRING = string.toUpperCase();

// console.log(STRING);

count = 0;

for(i=0; i<STRING.length; i++){
    if(STRING[i] == 'A'){
        count++;
    }
}

console.log("A Count => ", count);


let numberOf_a = string.split('a').length - 1;
// console.log("Number of a =>", numberOf_a);

let numberOf_A = string.split('A').length - 1;
// console.log("Number of A =>", numberOf_A);







