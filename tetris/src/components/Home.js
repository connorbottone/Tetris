import React from 'react'
import { StyledHome,StyledNav, StyledHomeWrapper,StyledHomeGames,StyledHeader,StyledButton } from './styles/StyledHome'

export default function Home({setCurrentPage}) {
  const runTetris = () => {
    setCurrentPage('Tetris')
    }
    const viewHighScores = () => {
      setCurrentPage('HighScores')
    }

    return (
    <StyledHomeWrapper>
        <StyledHomeGames>
          <StyledNav onClick={viewHighScores}>HighScores</StyledNav>
            <StyledHeader>TETROMANIA</StyledHeader>
            
    <StyledHome >
        
        <StyledButton onClick={runTetris}>Play Tetris</StyledButton>
    </StyledHome>
    <StyledHome style={{ marginTop: '20px' }}></StyledHome>
    </StyledHomeGames>
    </StyledHomeWrapper>
  )
}
