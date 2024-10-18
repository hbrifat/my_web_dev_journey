var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let strr = numbers.join("");
console.log(strr);


let str = "";

for(let num of numbers){
    str = str + num;
    // console.log(str);
}

console.log(str);
