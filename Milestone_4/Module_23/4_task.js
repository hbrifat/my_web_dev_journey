function findAveragePhonePrice(arr){
    let totalPrice = 0;
    for(let prices of arr){
        totalPrice += prices.price;
    }
    console.log(totalPrice);
    
    const AveragePhonePrice = totalPrice / arr.length;

    return AveragePhonePrice;
}


const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];


const AveragePhonePrice = findAveragePhonePrice(phones);

console.log("Average phone price::", AveragePhonePrice.toFixed(2));



