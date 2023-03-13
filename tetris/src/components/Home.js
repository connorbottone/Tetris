import React from 'react'
import { StyledHome, StyledNav, StyledHomeWrapper, StyledHomeGames, StyledHeader, StyledButton } from './styles/StyledHome'

export default function Home({ setCurrentPage }) {
  const runTetris = () => {
    setCurrentPage('Tetris')
  }
  const viewHighScores = () => {
    setCurrentPage('HighScores')
  }
  const runMultiplayerTetris = () => {
    setCurrentPage('MultiplayerTetris')
  }

  return (
    <StyledHomeWrapper>
      <StyledHomeGames>
        <StyledNav onClick={viewHighScores}>HighScores</StyledNav>
        <StyledHeader>TETROMANIA</StyledHeader>

        <StyledHome >

          <StyledButton onClick={runTetris}>Play Tetris</StyledButton>
        </StyledHome>
        <StyledHome style={{ marginTop: '20px' }}>
          <StyledButton onClick={runMultiplayerTetris}>Online 1 v.s.1</StyledButton>
          </StyledHome>
      </StyledHomeGames>
    </StyledHomeWrapper>
  )
}
