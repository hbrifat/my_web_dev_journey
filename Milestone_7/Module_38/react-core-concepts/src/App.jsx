import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actors'
import Singers from './Singers'

function App() {
  
  const actors = ["Choyon", "Rubel", "Manna", "Jashim"];

  const singers = [
    {id: 1, name: "Eva rahman", age: 38},
    {id: 2, name: "Mahfuzur rahman", age: 55},
    {id: 3, name: "AR rahman", age: 38},
    {id: 4, name: "Asif rahman", age: 42},
    {id: 5, name: "Rahman", age: 32}
  ]

  return (
    <>
      <h1>Vite + React</h1>

      <Person></Person>

      <Actor name="Bappa Raj"></Actor>

      {
        actors.map(actor => <Actor name = {actor}> </Actor>)
      }

      {
        singers.map(singer => <Singers name={singer.name} id={singer.id} age={singer.age}></Singers>)
      }

      {/* <Todo 
      task="React Core concepts" 
      isDone={false}></Todo>
      <Todo 
      task="JSX" 
      isDone={true}></Todo>
      <Todo 
      task="JS Core concepts" 
      isDone={true}></Todo>

      <Student name="hb" age="30" hobby="gardening"></Student>
      <Student name="nb" age="25" hobby="fishing"></Student>
      <Student ></Student>

      <Device name="laptop" price="55,000TK"></Device>
      <Device name="smartphone" price="15,000TK"></Device>
      <Device name="pc" price="1,15,000TK"></Device> */}


      
    </>
  )
}

function Device(props){
  // console.log(props);
  // eslint-disable-next-line react/prop-types
  let {name, price} = props;
  return (
    <div>
      <h3> Device Name: {name} </h3>
      <p> Device Price: {price}</p>
    </div>
  )
}

function Person(){
  const userClass = {
    border: "1px solid limegreen",
    padding: "20px",
    margin: "20px",
    borderRadius: "25px"
  };
  const name ="hb";
  return <h2 style={userClass}>Name : The name of person is {name}</h2>
}

// eslint-disable-next-line react/prop-types
function Student({name="N/A", age="N/A", hobby="N/A"}){
  return (
    <div className='student'>
      <h3>Student Name: {name}</h3>
      <p>Student Age: {age}</p>
      <p>Student Hobby: {hobby}</p>
    </div>
  )
}

export default App
