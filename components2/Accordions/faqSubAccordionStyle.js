import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const SubAccordionContainer = styled.div`
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0px 0px 4px 3px rgba(114, 0, 224, 0.1);
  margin: 2px 2px 12px;
`;

export const SubAccordionLink = styled.a`
  text-decoration: none;
  color: rgba(114, 0, 224, 1);
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 12px;
  padding: 10px;
  box-shadow: 0px 0px 4px 3px rgba(114, 0, 224, 0.1);
  margin: 2px 2px 12px;
  letter-spacing: -2.5%;

  :hover {
    text-decoration: underline;
  }

  img{
    width: 23px;
  }
`;

export const SubAccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -2.5%;
  color: var(--text);
`;

export const SubAccordionContentBox = styled.div`
  overflow: hidden;
  height: ${(props) => (props.isActive ? 'fit-content' : '0')};
  margin: ${(props) => (props.isActive ? '10px 0 8px' : '0')};
`;

export const SubContent = styled.div`
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-m);
  color: var(--chicago);
  line-height: 20px;
`;

export const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  transition: transform 0.5s ease-in;
  transform: ${({ isActive }) =>
    isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
  transform-origin: center;
`;

export const VideoBtn = styled.button`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 15px;
  color: var(--light-mode-purple);
  border-radius: 18px;
  border: 1px solid var(--light-mode-purple);
  padding: 8px;
  background-color: transparent;
  cursor: pointer;
`;

export const VideoIcon = styled.img`
  width: 20px;
  height: 20px;
`;
