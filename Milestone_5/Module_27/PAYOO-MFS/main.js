// add money section


document.getElementById('add-money-btn')
    .addEventListener('click', function(){
        // form display & hidden
        document.getElementById('add-money-form').classList.remove('hidden');

        document.getElementById('cash-out-form').classList.add('hidden');


        const addMoneySubmit = document.getElementById('add-money-submit').addEventListener('click', function(event){

            event.preventDefault();

            // functionality
            const addMoneyAmount = document.getElementById('add-money-input').value;
            const addMoneyAmountValue = parseFloat(addMoneyAmount);

            const pinInput = document.getElementById('add-money-pin-input').value;

            // console.log(pinInput);

            if(pinInput == '1234'){
                // console.log("pin correct!");
                let availableBalance = document.getElementById('available-balance').innerText;
                const availableBalanceValue = parseFloat(availableBalance);

                const updatedBalance = availableBalanceValue + addMoneyAmountValue;

                document.getElementById('available-balance').innerText = updatedBalance;


                // reset

                document.getElementById('add-money-pin-input').value = "";
                document.getElementById('add-money-input').value = "";
                
            } else{
                alert('Wrong credential!');

                 // reset input

                 document.getElementById('add-money-pin-input').value = "";
                 document.getElementById('add-money-input').value = "";
            }
        }) 
    })



// cash out section

document.getElementById('cash-out-btn')
    .addEventListener('click', function(){

        // form display & hidden

        document.getElementById('add-money-form').classList.add('hidden');

        document.getElementById('cash-out-form').classList.remove('hidden');
    })


document.getElementById('cash-out-submit')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOutAmount = document.getElementById('cash-out-input').value;
        const cashOutAmountValue = parseFloat(cashOutAmount);

        const pinInput = document.getElementById('cash-out-pin-input').value;

        if(pinInput == '1234'){
            const availableBalance = document.getElementById('available-balance').innerText;

            const availableBalanceValue = parseFloat(availableBalance);

            const updatedBalance = availableBalanceValue - cashOutAmountValue;

            document.getElementById('available-balance').innerText = updatedBalance;

            // reset input

            document.getElementById('cash-out-input').value = "";
            document.getElementById('cash-out-pin-input').value = "";

        } else {
            alert("Wrong credential! Try later!");

             // reset input

             document.getElementById('cash-out-input').value = "";
             document.getElementById('cash-out-pin-input').value = "";
        }
    })


