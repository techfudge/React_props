import React from 'react';
import './App.css';
import Profile from './Profile/Profile';


function App() {
  const handleName = (name) => alert(`Profile user name is ${name}`);

  return (
    <div className="App">
      <Profile
        fullName="John Doe"
        bio="Software engineer, coffee lover, and aspiring astronaut."
        profession="Web Developer"
        handleName={handleName}
      >
        <img src="/path/to/image.jpg" alt="Profile" />
      </Profile>
    </div>
  );
}


export default App;
