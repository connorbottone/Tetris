import styled from 'styled-components';
import bgImage from '../../img/bg.png';
import classic from '../../img/tetris.PNG';
export const StyledHome = styled.div`
  display: flex;
  align-items: flex-start;

  margin: 0 auto;
  max-width: 600px;
  height: 40vh;
border: 4px solid #333;
border-radius: 20px;
color: #999;
background: url(${classic}) #000;
 
`;

export const StyledHomeWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bgImage}) #000;
    background-size: cover;
    overflow: hidden;
    
`;

export const StyledHomeGames = styled.div`
    width: 80vw;
    height: 100vh;
   border: 4px solid #333;
    background-size: cover;
    overflow: hidden;
    margin-left: 10vw;
        `;
      export  const StyledButton = styled.button`
        box-sizing: border-box;
      
        margin-top:34vh;
        margin-left: 2vw;
        padding: 19px;
        min-height: 30px;
        width: 90%;
        border-radius: 20px;
        border: none;
        color: white;
        background: #333;
        font-family: Pixel, Arial, Helvetica, sans-serif;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
      `;
    export  const StyledHeader = styled.h1`
  position: relative;
  color: #FFF;
  font-size: 72px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 0px 0px 10px #000, 0px 0px 20px #000, 0px 0px 30px #000;
  z-index: 1;
  margin-left: 26.5vw;
    margin-top: -1vh;
  
  &:after {
    content: 'TETROMANIA';
    position: absolute;
    top: 2px;
    left: 2px;
    color: #666;
    text-shadow: none;
    z-index: -1;
  }
`;