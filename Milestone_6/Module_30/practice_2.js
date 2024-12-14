let makeArr = (arr) => {
    let newArr = [];
    for(let item of arr){
        if(item.length % 2 == 0){
            newArr.push(item);
        }
    }
    return newArr;
}


const friends = ['A_Awoal', 'Shumon', 'Farabi', 'Imon', 'Tamim'];

const someFriends = makeArr(friends);

console.log(someFriends);
