let ticketPrice = 800;
let discount = 0;
let busFare;
let age = 20;
let students = true;

if(age < 10){
    busFare = ticketPrice - (ticketPrice*1);
    console.log("Bus Fare in 100% discount is:: ", busFare);
}
else{
    if(students && age < 60){
        busFare = ticketPrice - (ticketPrice*(50/100));
        console.log("Bus Fare in 50% discount is:: ", busFare);
    }
    else if (age >= 60) {
        busFare = ticketPrice - (ticketPrice*(15/100));
        console.log("Bus Fare in 15% discount is:: ", busFare);
    }
    else {
        busFare = ticketPrice;
        console.log("Bus Fare in regular ticket price:: ", busFare);
    }
}