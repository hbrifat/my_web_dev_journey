// calculate total budget

function calculateElectronicsBudget(laptop, tablets, mobile){
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalMoneyRequired = (laptop*laptopPrice) + (tablets*tabletPrice) + (mobile*mobilePrice);

    return totalMoneyRequired;
}


const laptop = 3, tablet = 5, mobile = 6;

const totalBudget = calculateElectronicsBudget(laptop, tablet, mobile);

console.log("Budget required::", totalBudget);
