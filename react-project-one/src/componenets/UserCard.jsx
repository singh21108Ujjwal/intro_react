import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt='ujjwal'></img>
      <p id='user-description'>{props.desc}</p>
    </div>
  )
}

// we need to export this component to use it somewhere else.
export default UserCard
