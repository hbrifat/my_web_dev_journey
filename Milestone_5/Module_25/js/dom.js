const allLi = document.getElementsByTagName('li');

const section = document.getElementsByClassName('first-section');

console.log(section[0].innerText);


const firstUl = document.getElementById('first-ul');

const newLi = document.createElement('li');
newLi.innerText = 'Ami notun list!';

firstUl.appendChild(newLi);

// console.log(firstUl.innerText);

firstUl.style.color = 'white';
firstUl.style.backgroundColor = 'gray';
firstUl.style.padding = '3rem';


const firstQuery = document.querySelector('ul');

console.log(firstQuery.innerText);


const mainSection = document.getElementById('main-sec');


const newSection = document.createElement('section');

newSection.innerHTML = `
    <h2> My Added Section </h2>
    <span> Date: Future
    <p> random text </p>
`;


firstUl.setAttribute('title', 'tootltip set by js');









