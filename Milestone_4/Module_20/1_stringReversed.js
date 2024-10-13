const mobile = {
    brandName: 'Nokia',
    established: 1990,
    speciality: "feature phone",
    somePhones: ['105', '3310', '2100']
}

for(const prop in mobile){
    console.log(prop, '?');
    console.log(prop, ':', mobile[prop]);

    // console.log(mobile);
    
    
}

const keyName = Object.keys(mobile);

console.log(keyName);

for(let key of keyName){
    console.log(key);
}