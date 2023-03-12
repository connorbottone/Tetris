import React from 'react'
import { StyledHome, StyledHomeWrapper,StyledHomeGames,StyledHeader,StyledButton } from './styles/StyledHome'

export default function Home({setCurrentPage}) {
  const tetris = () => {
    setCurrentPage('Tetris')
    }

    return (
    <StyledHomeWrapper>
        <StyledHomeGames>
            <StyledHeader>TETROMANIA</StyledHeader>
    <StyledHome >
        
        <StyledButton onClick={tetris}>Play Tetris</StyledButton>
    </StyledHome>
    <StyledHome style={{ marginTop: '20px' }}></StyledHome>
    </StyledHomeGames>
    </StyledHomeWrapper>
  )
}
