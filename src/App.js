import React from 'react';
import PlayersList from './PlayersList';

const App = () => {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Players List</h1>
      <PlayersList />
    </div>
  );
};

export default App;
