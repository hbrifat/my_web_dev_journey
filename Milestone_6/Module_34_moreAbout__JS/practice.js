// 1. a function that displays a message after 5s


function displayMessage(){
    console.log("Hello Jonogon!");
}


// setTimeout(displayMessage, 10000);



// 2. a function delayedGreeting() that takes two parameters => name, delay time and logs a greeting message after the given delay time


function delayedGreeting(name, delayTime){
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, delayTime);
}


// delayedGreeting('Alice', 3000);


// 3. tellJoke() logs a funny message every 2 seconds and after 10 seconds, it stops. 

function tellJoke() {
    console.log("Why don't scientist trust atoms? Because they make up everything!");
}

const jokeInterval = setInterval(tellJoke, 2000);

setTimeout(() => {

    clearInterval(jokeInterval)

}, 10000);


// 4. async/await function that fetch data from an api and logs a message


async function loadData(){
    const res = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
    const data = await res.json();
    console.log(data);
}


