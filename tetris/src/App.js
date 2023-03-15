import React from 'react';
import Tetris from './components/Tetris';
import { useState } from 'react';
import HighScores from './components/HighScores';
import Home from './components/Home';
import MultiplayerTetris from './components/MultiplayerTetris';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [highScores, setHighScores] = useState([]);
  return (
    <div className="App">
      {currentPage === 'Tetris' && <Tetris currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
      {currentPage === 'HighScores' && <HighScores highScores={highScores} />}
      {currentPage === 'Home' && <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      {currentPage === 'MultiplayerTetris' && <MultiplayerTetris currentPage={currentPage} setCurrentPage={setCurrentPage} />}

    </div>
  );
}
export default App;
