import React from 'react';

import IconBar from './components/IconBar';
import TextBar from './components/textBar';
import Header from './components/Header';
import ActionBar from './components/ActionBar';
import RightBar from './components/RightBar';
import ListContent from './components/ListContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <IconBar />
        <TextBar />
        <div className="content">
          <Header />
          <div className="view">
            <div className="listContainer">
              <ActionBar />
              <ListContent />
            </div>
          </div>
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default App;
