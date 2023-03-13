import { useState, useCallback } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos';
import { STAGE_WIDTH, checkCollisionTwo } from '../gameHelpersTwo';

export const usePlayerTwo = () => {
  const [playerTwo, setPlayerTwo] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  function rotateTwo(matrix, dir) {
    // Make the rows to become cols (transpose)
    const mtrx = matrix.map((_, index) => matrix.map(column => column[index]));
    // Reverse each row to get a rotaded matrix
    if (dir > 0) return mtrx.map(row => row.reverse());
    return mtrx.reverse();
  }

  function playerRotateTwo(stageTwo, dir) {
    const clonedPlayer = JSON.parse(JSON.stringify(playerTwo));
    clonedPlayer.tetromino = rotateTwo(clonedPlayer.tetromino, dir);

    const pos = clonedPlayer.pos.x;
    let offset = 1;
    while (checkCollisionTwo(clonedPlayer, stageTwo, { x: 0, y: 0 })) {
      clonedPlayer.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedPlayer.tetromino[0].length) {
        rotateTwo(clonedPlayer.tetromino, -dir);
        clonedPlayer.pos.x = pos;
        return;
      }
    }
    setPlayerTwo(clonedPlayer);
  }

  const updatePlayerPosTwo = ({ x, y, collided }) => {
    setPlayerTwo(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided,
    }));
  };

  const resetPlayerTwo = useCallback(() => {
    setPlayerTwo({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false,
    });
  }, []);

  return [playerTwo, updatePlayerPosTwo, resetPlayerTwo, playerRotateTwo];
};
