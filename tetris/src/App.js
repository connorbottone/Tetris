import React from 'react';
import Tetris from './components/Tetris';
import { useState } from 'react';
import HighScores from './components/HighScores';

function App  () {
  const [currentPage, setCurrentPage] = useState('Tetris');
  const [highScores, setHighScores] = useState([]);
  return (
  <div className="App">
    {currentPage === 'Tetris' && <Tetris />}
    {currentPage === 'HighScores' && <HighScores highScores={highScores} />}

  </div>
);
}
export default App;
