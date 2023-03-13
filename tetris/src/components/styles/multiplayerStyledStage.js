import styled from 'styled-components';

export const MultiplayerStyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(12.5vw / ${props => props.width})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: px solid #333;
  width: 100%;
  max-width: 25vw;
  background: #71;
  margin-left: 10px;
  
`;
