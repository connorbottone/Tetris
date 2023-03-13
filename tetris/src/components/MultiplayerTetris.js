import React, { useState, useRef } from 'react';

import {io} from 'socket.io-client';
import styled from 'styled-components';
import { createStageTwo, checkCollisionTwo } from '../gameHelpersTwo';
import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { StyledHeader } from './styles/StyledHome';

import jazz from '../audio/jazz.mp3';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';

import { useIntervalTwo } from '../hooks/useIntervalTwo';
import { usePlayerTwo } from '../hooks/usePlayerTwo';
import { useStageTwo } from '../hooks/useStageTwo';
import { useGameStatusTwo } from '../hooks/useGameStatusTwo';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import HighScores from './HighScores';
import MultiplayerStage from './MultiplayerStage';


const Tetris = () => {
  const [currentSong, setCurrentSong] = useState(jazz);
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [highScores, setHighScores] = useState([]);
  const [playing, setplaying] = useState(true);
  
  const socket = io('http://localhost:8080');

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );



  const [dropTimeTwo, setDropTimeTwo] = useState(null);
  const [gameOverTwo, setGameOverTwo] = useState(false);
  const [highScoresTwo, setHighScoresTwo] = useState([]);
  const [playingTwo, setplayingTwo] = useState(true);

  const [playerTwo, updatePlayerPosTwo, resetPlayerTwo, playerRotateTwo] = usePlayerTwo();
  const [stageTwo, setStageTwo, rowsClearedTwo] = useStageTwo(playerTwo, resetPlayerTwo);
  const [scoreTwo, setScoreTwo, rowsTwo, setRowsTwo, levelTwo, setLevelTwo] = useGameStatusTwo(
    rowsClearedTwo
  );



  console.log('re-render');
  const StyledMuteButton = styled.button`
  box-sizing: border-box;

  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #745;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };

  const movePlayerTwo = dir => {
    if (!checkCollisionTwo(playerTwo, stageTwo, { x: dir, y: 0 })) {
      updatePlayerPosTwo({ x: dir, y: 0 });
    }
  };

  const keyUpTwo = ({ keyCode }) => {
    if (!gameOverTwo) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 83) {
        setDropTimeTwo(1000 / (levelTwo + 1));
      }
    }
  };
  const audioRef = useRef(new Audio(jazz));

  const stopMusic = () => {
    if (playing === true) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      console.log("music stopped");
    }
    else {
      audioRef.current.play();
      console.log("music playing");
    }
    setplaying(!playing);
  };

  const startGame = () => {
    // Reset everything
    setStage(createStage());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
    audioRef.current.play();
  };

  const drop = () => {
    // Increase level when player has cleared 10 rows
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1);
      // Also increase speed
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (player.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOver(true);
        setDropTime(null);
        setHighScores(prevScores => [...prevScores, score]);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayer = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTime(null);
    drop();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useInterval(() => {
    drop();
  }, dropTime);

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };


  const startGameTwo = () => {
    // Reset everything
    setStageTwo(createStageTwo());
    setDropTimeTwo(1000);
    resetPlayerTwo();
    setScoreTwo(0);
    setLevelTwo(0);
    setRowsTwo(0);
    setGameOverTwo(false);

  };

  const dropTwo = () => {
    if (gameOverTwo) {
      return;
    }
    if (rows > (levelTwo + 1) * 10) {
      setLevelTwo(prev => prev + 1);
      // Also increase speed
      setDropTimeTwo(1000 / (levelTwo + 1) + 200);
    }

    if (!checkCollisionTwo(playerTwo, stageTwo, { x: 0, y: 1 })) {
      updatePlayerPosTwo({ x: 0, y: 1, collided: false });
    } else {
      // Game over!
      if (playerTwo.pos.y < 1) {
        console.log('GAME OVER!!!');
        setGameOverTwo(true);
        
        setDropTimeTwo(null);
        setHighScoresTwo(prevScores => [...prevScores, scoreTwo]);
      }
      updatePlayerPosTwo({ x: 0, y: 0, collided: true });
    }
  };

  const dropPlayerTwo = () => {
    // We don't need to run the interval when we use the arrow down to
    // move the tetromino downwards. So deactivate it for now.
    setDropTimeTwo(null);
    dropTwo();
  };

  // This one starts the game
  // Custom hook by Dan Abramov
  useIntervalTwo(() => {
    dropTwo();
  }, dropTimeTwo);

  const moveTwo = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 65) {
        movePlayerTwo(-1);
      } else if (keyCode === 68) {
        movePlayerTwo(1);
      } else if (keyCode === 83) {
        dropPlayerTwo();
      } else if (keyCode === 87) {
        playerRotateTwo(stageTwo, 1);
      }
    }
  };

  return (
    <div>

      <StyledTetrisWrapper
        role="button"
        tabIndex="0"
        onKeyDown={e => move(e)}

        onKeyUp={keyUp}
      >  <StyledHeader style={{ marginTop: '20px' }}>TETROMANIA</StyledHeader>
        <StyledTetris>
          <Stage stage={stage} />


          <aside>
            {gameOver ? (
              <Display gameOver={gameOver} text="Game Over" />
            ) : (
              <div>
                <Display text={`Score: ${score}`} />
                <Display text={`rows: ${rows}`} />
                <Display text={`Level: ${level}`} />
              </div>
            )}

            <StartButton callback={startGame} />
            <StyledMuteButton onClick={stopMusic}> {playing ? "Mute" : "UnMute"}</StyledMuteButton>

          </aside>
          <div role="button"
        tabIndex="0"
        onKeyDown={e => moveTwo(e)}

        onKeyUp={keyUpTwo}>
           <MultiplayerStage stageTwo={stageTwo} role="button"
           /><StartButton callback={startGameTwo} />
          <div>
            <Display text={`Score: ${score}`} />

          </div></div>
        </StyledTetris>

      </StyledTetrisWrapper></div>
  );
};

export default Tetris;
