import styled from 'styled-components';
import bgImage from '../../img/bg.png';
export const StyledHome = styled.div`
  display: flex;
  align-items: flex-start;

  margin: 0 auto;
  max-width: 600px;
  height: 40vh;
border: 4px solid #333;
border-radius: 20px;
color: #999;
background: url(${bgImage}) #000;
 
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