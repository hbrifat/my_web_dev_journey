function toggleMenuOption(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    // show the targeted section
    document.getElementById(id).classList.remove('hidden');
}



function getInputValueFromId(id){
    const inputValue = document.getElementById(id).value;
    const inputValueAmount = parseFloat(inputValue);
    return inputValueAmount;
}



function getTextValueFromId(id){
    const textValue = document.getElementById(id).innerText;
    const textValueAmount = parseFloat(textValue);
    return textValueAmount;
}


function updateBalance(newAmount){
    document.getElementById('balance-amount').innerText = newAmount;
}


function resetValue(id){
    document.getElementById(id).value = "";
}


function makeTransactionHistory(amount, string){
    const log = document.createElement('div');
    log.classList.add('text-center', 'py-1', 'my-1', 'bg-yellow-500');
    log.innerHTML = `
        <p> ${amount + string} </p>
    `;
    document.getElementById('transaction-history').appendChild(log);
}
