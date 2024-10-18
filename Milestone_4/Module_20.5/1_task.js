const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// const colorsReversed = colors.reverse();


// first way to reverse colors without using reverse()

let colorsReversed = [];

for(let i=colors.length-1; i>=0; i--){
    colorsReversed.push(colors[i]);
    // console.log(colorsReversed);
}

console.log(colorsReversed);


//second way to reverse


let reverseColors =[];

for(let j=0; j<colors.length; j++){
    reverseColors.unshift(colors[j]);
}

console.log(reverseColors);

