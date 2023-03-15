import styled from 'styled-components';
// BG Image
import bgImage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
  position: relative;
  z-index: 0;
 
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin: 0 auto;
  max-width: 50%;


  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  
  }
`;
export const StyledTetris2 = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  margin: 0 auto;
  max-width: 50%;
 position: relative;
    z-index: 2;
    margin-right: -45px;
    margin-top: -200px;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
   
   
  }
`;
