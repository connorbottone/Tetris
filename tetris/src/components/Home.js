import React from 'react'
import { StyledHome, StyledHomeWrapper,StyledHomeGames,StyledButton } from './styles/StyledHome'

export default function Home({setCurrentPage}) {
  const tetris = () => {
    setCurrentPage('Tetris')
    }

    return (
    <StyledHomeWrapper>
        <StyledHomeGames>
    <StyledHome style={{ marginTop: '90px' }}>
        
        <StyledButton onClick={tetris}>Play Tetris</StyledButton>
    </StyledHome>
    <StyledHome style={{ marginTop: '20px' }}></StyledHome>
    </StyledHomeGames>
    </StyledHomeWrapper>
  )
}
