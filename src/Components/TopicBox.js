import React from 'react'
import './topicBox.css'

export default function TopicBox(props) {
    
  return (

    <div>
      <div className='topicbox'>
        <span className='text'>my favourite food is {props.food} the price is {props.price}</span>
        {props.children}
      </div>
    </div>
  )
}
