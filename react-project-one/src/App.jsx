import UserCard from "./componenets/UserCard";
import reactPic from './assets/react.svg';
import ujjwalPic from './assets/Ujjwal.jpg';

function App() {

  return (
    <div className="container">
      <UserCard name="Ujjwal Kumar" desc = "desc 1" image={ujjwalPic} style={{"border-radius":"10px"}}/>
      <UserCard name="Ujjwal Kumar singh" desc = "desc 2" image={ujjwalPic} style={{"border-radius":"10px"}}/>
      <UserCard name="React " desc = "desc 3" image={reactPic} style={{"border-radius":"10px"}}/>      
    </div>
  )
}

export default App
 