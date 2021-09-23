import './App.css';
import Profile from './profile/profile';


function App() {

  const styleObject = {color:"red",textAlign:"center"} 

  return (
    <div style={styleObject}>
    <Profile Fullname="Sofiene FLISS" bio="10/12/1984" profession="Expert">
      <img src="/myphoto.jpg" alt="defaultimage"/>
    </Profile>
    </div>
  );
}

export default App;
