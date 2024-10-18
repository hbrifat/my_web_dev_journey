function randomInteger(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

const generateRandom = randomInteger(10, 100);

console.log("Random between 10 to 100::", generateRandom);
