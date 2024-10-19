function findSmallestName(arr){
    let smallest = arr[0];
    for(let item of arr){
        if(item.length < smallest.length){
            smallest = item;
        }
    }
    return smallest;
}

const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

const findSmallest = findSmallestName(names);
console.log("Smallest Word::", findSmallest.toUpperCase());

