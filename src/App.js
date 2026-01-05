import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>TOKEN</h1>
        <p>
          Tron blockchain par - Coming soon
        </p>
      </header>
      <Analytics />
    </div>
  );
}

export default App;
