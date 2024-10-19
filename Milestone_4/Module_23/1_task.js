const heights = [167, 190, 120, 165, 137];

// destructuring assignment
// const lowestNum = Math.min(...heights);

// ES6 apply method
// const lowestNum = Math.min.apply(Math, heights);

let lowestNum = heights[0];

for(let item of heights){
    if(item < lowestNum){
        lowestNum = item;
    }
}


console.log("Lowest::", lowestNum);
