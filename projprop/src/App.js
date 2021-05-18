
import './App.css';
import Profile from './Profile/Profile'

function App() {

let handleName = (name) =>
{
alert( `hello ${name}`)
}

  let fullName="AHMED"
  let profession=15
  return (
    <div className="App">
      <Profile fullName={fullName} profession={profession} handleName ={handleName } >
        <img src="/asset/img/profimg.jpeg" />
        </Profile>
    </div>
  );
}

export default App;
