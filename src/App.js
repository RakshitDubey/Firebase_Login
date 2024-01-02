import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

function App() {
  const [showSignup, setShowSignup] = useState(true);

  const handleToggle = () => {
    setShowSignup((prev) => !prev);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>Welcome to Firebase Login/Signup </h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={handleToggle} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          {showSignup ? 'Switch to Login' : 'Switch to Signup'}
        </button>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        {showSignup ? <Signup /> : <Login />}
      </div>
    </div>
  );
}

export default App;
