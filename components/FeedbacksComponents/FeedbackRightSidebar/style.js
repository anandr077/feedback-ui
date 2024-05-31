import styled from 'styled-components';

export const MainContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 48px;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding: 4px;
  border: solid 1px rgba(201, 198, 204, 0.5);
  background-color: #fff;
  z-index: 2;
`;

export const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Button = styled.div`
  width: 40px;
  height: 40px;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => props.isActive ? '#f1e6fc' : ''};
  //background-color: #f1e6fc;
`;
