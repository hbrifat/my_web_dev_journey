let str = "hello world of programming! welcome to the tech world!";

let words = str.split(" ");
// console.log(words);

for(let i=0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
}

// console.log(words);

str = words.join(" ");

console.log(str);







