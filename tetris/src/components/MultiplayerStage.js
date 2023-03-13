import React from 'react';
import { MultiplayerStyledStage } from './styles/multiplayerStyledStage';

import Cell from './Cell';

const Stage = ({ stage }) => (
  <MultiplayerStyledStage width={stage[0].length} height={stage.length}>
    {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
  </MultiplayerStyledStage>
);

export default Stage;
