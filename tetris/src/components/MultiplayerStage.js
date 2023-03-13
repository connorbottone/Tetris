import React from 'react';
import { MultiplayerStyledStage } from './styles/multiplayerStyledStage';

import Cell from './Cell';

const Stagetwo = ({ stageTwo }) => (
  <MultiplayerStyledStage width={stageTwo[0].length} height={stageTwo.length}>
    {stageTwo.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </MultiplayerStyledStage>
);

export default Stagetwo;
