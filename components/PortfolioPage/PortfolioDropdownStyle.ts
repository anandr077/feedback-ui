import styled from 'styled-components';

const SelectStyle = styled.select`
  min-width: 78px;
  border-radius: 8px;
  border: 1px solid #f2e6fe;
  background-color: white;
  box-shadow: 0px 2px 2px rgba(48, 27, 114, 0.07);
  padding: 12px;
  outline: none;
  cursor: pointer;

  @media (max-width: 576px) {
    flex: 1;
  }
`;



export {
    SelectStyle
  };