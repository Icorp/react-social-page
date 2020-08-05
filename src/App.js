import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className='header'>
        <img src="https://logomaster.ai/static/media/gallery009.6a28a2e7.png"></img>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div><a>Message</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className='content'>
        <img src="https://image.freepik.com/free-vector/synthwave-retrowave_148087-120.jpg" />
      </div>
    </div>
  );
}




export default App;
