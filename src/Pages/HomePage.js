import React from 'react'
import './HomePage.css';
import { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import TopicBox from '../Components/TopicBox'
import { Link } from 'react-router-dom'

function btnClick(){
  alert("hi");
}



export default function HomePage() {
  //let count = 0;
  const [count, setCount] = useState(0);

  const increment = () =>{
     //count +=1;
    setCount(count+1);
  };
 

  const decrement = () =>{
    //count-+1;
    setCount(count-1);
  };

  useEffect(()=>{
    //What I want to do
    console.log(`New count is : ${count}`);
  },[count]//Dependancy arr
  
  )
  
  
  return (
    <div>
      <h1>Home Page</h1>
      <TopicBox food="kottu" price="RS 200">
        <span>this is the  </span>
      </TopicBox>
      <TopicBox food="rice" price="RS 400">
        <button onClick={btnClick}> Press this</button>
      </TopicBox>
      <TopicBox food="Hoppers" price="RS 30">
        <p>hello everyone</p>
      </TopicBox>

      <Link to="/About"> Go to the About us</Link>
      <Link to="/Contact"> Go to the Contact us</Link>

      <hr/>

      <div>
     <span className='title'>My Counter</span>
     <p className='subTitle'>The count is is {count}</p>
     <button className='btn' onClick={decrement}>-</button>
     <span>  or   </span>
     <button className='btn' onClick={increment}>+</button>
   </div>

   <hr/>
   <div>
        <h1>React Bootstrap </h1>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Item 1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>



      
      

    </div>
  )
}
