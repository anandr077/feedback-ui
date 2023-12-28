import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccordionTitle = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: var(--font-size-xl);
  line-height: 26px;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 20px 0;
  border-top: 1px solid #f1e6fc;
  cursor: pointer;
`;

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: height 0.6s ease;
`;

export const SectionContent = styled.div`
  overflow: hidden;
  height: ${(props) => (props.isActive ? 'fit-content' : '0')};
  transition: 0.3s ease-in;
`;

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  transition: transform 0.5s ease-in;
  transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'rotate(0deg)')};
  transform-origin: center;
`;
