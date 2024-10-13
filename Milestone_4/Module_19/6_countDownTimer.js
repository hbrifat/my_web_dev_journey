// let count = 81;

// const timer = setInterval(function(){
//     console.log(count);
//     count--;
//     if(count === 65){
//         clearInterval(timer);
//         console.log("Time's up!!!");
//     }
// }, 1000);


let count = 21;

const timer = setInterval(function(){
    console.log(count);
    count--;
    if(count === 15){
        clearInterval(timer);
        console.log("Time's up!!!");     
    }
}, 1000);