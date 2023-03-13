import { useState, useEffect } from 'react';
import { createStageTwo } from '../gameHelpersTwo';

export const useStageTwo = (playerTwo, resetPlayerTwo) => {
  const [stageTwo, setStageTwo] = useState(createStageTwo());
  
  const [rowsClearedTwo, setRowsClearedTwo] = useState(0);

  useEffect(() => {
    setRowsClearedTwo(0);
    const sweepRowsTwo = newStage =>
      newStage.reduce((ack, row) => {
        if (row.findIndex(cell => cell[0] === 0) === -1) {
          setRowsClearedTwo(prev => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateStageTwo = prevStage => {
      // First flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell))
      );

      // Then draw the tetromino
      playerTwo.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + playerTwo.pos.y][x + playerTwo.pos.x] = [
              value,
              `${playerTwo.collided ? 'merged' : 'clear'}`,
            ];
          }
        });
      });
      // Then check if we got some score if collided
      if (playerTwo.collided) {
        resetPlayerTwo();
        return sweepRowsTwo(newStage);
      }
      return newStage;
    };

    // Here are the updates
    setStageTwo(prev => updateStageTwo(prev));
  }, [
    playerTwo.collided,
    playerTwo.pos.x,
    playerTwo.pos.y,
    playerTwo.tetromino,
    resetPlayerTwo,
  ]);

  return [stageTwo, setStageTwo, rowsClearedTwo];
};
