import styled from 'styled-components';

export const FocusAreaContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FocusArea = styled.div`
  padding: 8px;
  border-radius: 6px;
  box-shadow: 0 2px 4px 0 rgba(112, 112, 112, 0.1);
  width: 293px;
  border: solid 1px rgba(201, 198, 204, 0.5);
  cursor: pointer;

  &:hover {
    border-color: rgba(197, 150, 242, 1);
  }
`;
