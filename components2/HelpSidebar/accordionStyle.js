import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AccordionTitle = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-xl);
  letter-spacing: -2.5%;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ feedback }) => (feedback ? '' : '20px 0')};
  border-top: 1px solid #f1e6fc;
  cursor: pointer;
`;

export const SectionContent = styled.div`
  transition: 0.3s ease-in;
`;

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  height: 100% !important;
  background-color: ${({ feedback }) => (feedback ? '#f2f1f3' : 'initial')};
  transition: transform 0.5s ease-in;
  transform: ${({ isActive }) =>
    isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
  transform-origin: center;
  width: ${({ feedback }) => (feedback ? '40px' : '')} !important;
  padding: ${({ feedback, isActive }) =>
    feedback
      ? isActive
        ? '0px 3px 0px 16px'
        : '0px 16px 0px 3px'
      : 'initial'};
`;
