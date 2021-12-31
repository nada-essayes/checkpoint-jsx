import './App.css';
import React from 'react';
import './style.css';

function App() {
  return (
    <div className="App">
     <div className="style" >

      <h1  className="title red">Your name here</h1>
      
      <br ></br>
      <img src="/imageInSrc.jpg"  ></img>
      <br ></br>
      <img src="/imageInPublic.jpg" />
    </div>
    <video width="320" height="240" controls>
      <source src="myVideo.mp4" type="video/mp4"  />
    </video>
    </div>
  );
}

export default App;
