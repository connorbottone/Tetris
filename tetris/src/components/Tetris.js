import React from "react";
import { createStage } from "../gameHelpers";
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";


function    Tetris() {
    return (
        <StyledTertisWrapper>
            <StyledTetris>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text="Score"/>
                    <Display text="Rows"/>
                    <Display text="Level"/>
                </div>
                <StartButton/>
            </aside>
            </StyledTetris>
        </StyledTertisWrapper>
    );
}
export default Tetris;