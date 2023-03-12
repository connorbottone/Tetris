import React from "react";
import { StyledCell } from "./styles/Cell";
import { TETROMINOS } from "../tetrominos";
function Cell({ type }) {
  return (

    <StyledCell type={type} color={TETROMINOS[type].color}> call</StyledCell>
)}
export default Cell;