import React from 'react'
import reactpic from '../assets/react.svg'
import './UserCard.css'

const UserCard = () => {
  return (
    <div className='user-container'>
      <p id='user-name'>Ujjwal Kumar</p>
      <img id='user-img' src={reactpic} alt='ujjwal'></img>
      <p id='user-description'>Description of Ujjwal</p>
    </div>
  )
}

// we need to export this component to use it somewhere else.
export default UserCard
