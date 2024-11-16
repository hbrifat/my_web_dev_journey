// options btn function

document.getElementById('add-money-option')
    .addEventListener('click', function(){
        toggleMenuOption('add-money-form');
    })


document.getElementById('cash-out-option')
    .addEventListener('click', function(){
        toggleMenuOption('cash-out-form');
    })


document.getElementById('transactions-option')
    .addEventListener('click', function(){
        toggleMenuOption('transaction-history');
    })



// Add money

document.getElementById('add-money-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoneyAmount = getInputValueFromId('add-money-input');
        
        const pinNumber = getInputValueFromId('add-money-pin');

        if(pinNumber === 1234){
            const mainBalance = getTextValueFromId('balance-amount');
            const newBalance = mainBalance + addMoneyAmount;
            updateBalance(newBalance);
            
            // update transaction history
            makeTransactionHistory(addMoneyAmount, 'Tk. Added!');

            // reset input Value
            resetValue('add-money-input');
            resetValue('add-money-pin');

            
        } else{
            alert("Wrong credential!!! Try later!!!");
        }
        
    })




// Cash out

document.getElementById('cash-out-btn')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOutAmount = getInputValueFromId('cash-out-input');
        const pinNumber = getInputValueFromId('cash-out-pin');
    
        if(pinNumber === 1234){
            const mainBalance = getTextValueFromId('balance-amount');
            if(cashOutAmount < mainBalance) {
                const newBalance = mainBalance - cashOutAmount;
                updateBalance(newBalance);

                // update transaction history
                makeTransactionHistory(cashOutAmount, 'Tk. cash out done!!!');

                // reset input value
                resetValue('cash-out-input');
                resetValue('cash-out-pin');
            } else {
                alert("Insufficient balance!!!");
            }
        } else {
            alert("Wrong credential!!! Try later!!!");
        }

    })



