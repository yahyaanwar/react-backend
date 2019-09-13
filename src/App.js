import React from 'react';

import IconBar from './components/IconBar';
import TextBar from './components/textBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <IconBar />
        <TextBar />
      </div>
    </div>
  );
}

export default App;
