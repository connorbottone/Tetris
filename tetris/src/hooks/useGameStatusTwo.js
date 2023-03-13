import { useState, useEffect, useCallback } from 'react';

export const useGameStatusTwo = rowsClearedTwo => {
  const [scoreTwo, setScoreTwo] = useState(0);
  const [rowsTwo, setRowsTwo] = useState(0);
  const [levelTwo, setLevelTwo] = useState(0);

  const linePoints = [40, 100, 300, 1200];

  const calcScoreTwo = useCallback(() => {
    // We have score
    if (rowsClearedTwo > 0) {
      // This is how original Tetris score is calculated
      setScoreTwo(prev => prev + linePoints[rowsClearedTwo - 1] * (levelTwo + 1));
      setRowsTwo(prev => prev + rowsClearedTwo);
    }
  }, [levelTwo, linePoints, rowsClearedTwo]);

  useEffect(() => {
    calcScoreTwo();
  }, [calcScoreTwo, rowsClearedTwo, scoreTwo]);

  return [scoreTwo, setScoreTwo, rowsTwo, setRowsTwo, levelTwo, setLevelTwo];
};
