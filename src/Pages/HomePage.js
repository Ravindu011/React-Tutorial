import React from 'react'
import './HomePage.css';

import TopicBox from '../Components/TopicBox'
import Content from '../Components/Content'
import { Link } from 'react-router-dom'

export default function HomePage() {
  
  return (
    <div>
      <h1>Home Page</h1>
      <TopicBox food="kottu" price="RS 200">
        <span>this is the  </span>
      </TopicBox>
      <TopicBox food="rice" price="RS 400">
        <button>Press this</button>
      </TopicBox>
      <TopicBox food="Hoppers" price="RS 30">
        <p>hello everyone</p>
      </TopicBox>

      <Link to="/About"> Go to the About us</Link>
      <Link to="/Contact"> Go to the Contact us</Link>

      
      

    </div>
  )
}
