// let num = 1;
// let sum = 0;

// while(num){
//     sum = sum + num;
//     num++;
//     if(sum >= 100) {
//         break;
//     }
// }
// console.log("Num = ", num);
// console.log("Sum = ", sum);

let myNum;

for(myNum=2; myNum<=100; myNum++){
    if(myNum === (Math.sqrt(myNum) * Math.sqrt(myNum)) ) {
        break;
    }
}
console.log("my Num:: ", myNum);