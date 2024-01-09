import styled from 'styled-components';

export const OnboardContainer = styled.div`
  width: ${props => props.mobileView ? "100vw" : "581px"};
  height: ${props => props.mobileView ? "100vh" : "auto"};
  min-height: 413px;
  border-radius: 12px;
  background-color: var(--white);
  border: 1px solid #f1e6fc;
  box-shadow: 0 4px 16px 0 rgba(114, 0, 224, 0.1);
`;
