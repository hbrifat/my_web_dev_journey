// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(data => console.log(data))



function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data));
}


function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(data => console.log(data));
}


function loadData3(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayItem(data))
}


function displayItem(data){
    const listContainer = document.getElementById('list-container');

    for(let item of data){
        const li = document.createElement('li');
        li.innerText = item.name;
        listContainer.appendChild(li);
    }
}
