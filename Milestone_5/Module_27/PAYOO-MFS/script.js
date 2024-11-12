document.getElementById('login-btn').addEventListener('click', function(event){
    // console.log("btn clicked!!!!!!");

    // prevent default form event
    event.preventDefault();

    // getting the phoneNumber

    const mobileNumber = document.getElementById('mobile-number-input').value;

    const pinNumber = document.getElementById('pin-number').value;

    // console.log(mobileNumber, pinNumber);
    if(mobileNumber == "01829197765" && pinNumber == "1234"){
        window.location.href = "./main.html";
    } else{
        alert('Mobile number or Pin is wrong!')
    }
    
    
})