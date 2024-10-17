let string = "siX";
console.log("old String", string);


if(string.includes('x')){
    //string[string.indexOf('x')] = 'X';
    //string is immutable
    string = string.replace("x", "X");
} else if(string.includes('X')){
    string = string.replace('X', 'x');
}

console.log("New String::", string);
