function calculateTax(income, expenses) {
    if((income < 0 || expenses < 0) || (income < expenses)){
        return "Invalid Input";
    } else {
        let difference = income - expenses;
        let tax = difference * (20/100);
        return tax;
    }
    
}



function sendNotification(email) {
    if(!email.includes("@")){
        return "Invalid Email";
    } else {
        let newArr = email.split("@");

        return newArr[0] + " sent you an email from " + newArr[1];
    }  
}




function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input";
    } else{
        let newArr = name.split("");

        for(let item of newArr){
            if( !isNaN(+item) ){
                return true;   
            }    
        }
        return false;
    }    
}




function calculateFinalScore(obj) {
    if(typeof obj !== "object"){
        return "Invalid Input";
    } else {
        if((obj.testScore + obj.schoolGrade) >= 60 && obj.isFFamily === true){
            return true;
        } else {
            return false;
        }
    }
}



function  waitingTime(waitingTimes  , serialNumber) {
    if(!(Array.isArray(waitingTimes)) || (typeof serialNumber !== "number")){
        return "Invalid Input";
    } else {
        let sumOfWaitingTimes = 0;

        for(let time of waitingTimes){
        sumOfWaitingTimes += time;
        }

        let interviewDone = waitingTimes.length;
        let avgWaitingTime = Math.round(sumOfWaitingTimes/interviewDone);
    
        return (serialNumber - (interviewDone + 1)) * avgWaitingTime;
    }
}


