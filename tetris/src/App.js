import React from 'react';
import Tetris from './components/Tetris';
import { useState } from 'react';
import HighScores from './components/HighScores';
import Home from './components/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [highScores, setHighScores] = useState([]);
  return (
    <div className="App">
      {currentPage === 'Tetris' && <Tetris />}
      {currentPage === 'HighScores' && <HighScores highScores={highScores} />}
      {currentPage === 'Home' && <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />}
    </div>
  );
}
export default App;
