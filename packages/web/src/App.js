import React, { useEffect, useState } from 'react';

import axios from 'axios';

import handleActiveHook from './services/webhook';

function App() {
  const [data, serData] = useState();
  useEffect(() => {
    const reqWebHook = axios.get('http://localhost:3333/services/status');
    console.log(reqWebHook);
    handleActiveHook(serData);
  }, []);
  return (
    <div>
      <header
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          fontSize: '2rem',
          color: 'blue'
        }}
      >
        <p>web app is running.</p>
        <button type="button" onClick={() => console.log(data)}>
          click
        </button>
      </header>
    </div>
  );
}

export default App;
