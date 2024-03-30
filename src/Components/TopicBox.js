import React from 'react'
import './topicBox.css'

export default function TopicBox() {
    const topic = "my favourite food is kottu"
    const topic2= " and Rice"
  return (

    <div>
      <div className='topicbox'>
        <span className='text'>{topic} {topic2}</span>
      </div>
    </div>
  )
}
