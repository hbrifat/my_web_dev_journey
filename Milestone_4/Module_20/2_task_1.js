const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": "#daa520"
};


console.log(colors['golden rod']);
// console.log(colors.red);

console.log("\n");


for(let everyProp in colors){
    console.log(everyProp, "?");
    console.log(everyProp, ":", colors[everyProp]);
    
    
}
