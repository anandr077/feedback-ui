import styled from 'styled-components';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';

export const OnboardContainer = styled.div`
  width: 581px;
  height: 413px;
  border-radius: 12px;
  background-color: var(--white);
  border: 1px solid #f1e6fc;
  box-shadow: 0 4px 16px 0 rgba(114, 0, 224, 0.1);
  position: relative;
`;

export const Logo = styled.img`
  width: 74px;
  height: 54px;
  display: block;
  margin: 40px auto 20px;
`;

export const Heading = styled.h1`
  text-align: center;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  color: #000000;
`;

export const Text = styled.p`
  max-width: 75%;
  margin: 20px auto 30px;
  text-align: center;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  font-size: var(--font-size-xl);
  line-height: 26px;
  color: #1e252a;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 30px;
  margin: 0 auto;
  padding: 0 18px;
  background-color: var(--light-mode-purple);
  font-family: var(--font-family-ibm_plex_sans);
  border: none;
  color: var(--white);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  cursor: pointer;
  transition: 0.2s ease-in;

  &:hover {
    background-color: var(--royal-purple);
  }
`;

export const StyledArrowForwardIcon = styled(ArrowForwardIcon)`
  font-size: 16px !important;
`;

export const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  gap: 4px;
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? 'var(--light-mode-purple)' : '#D9D9D9'};
`;

export const StyledAddIcon = styled(AddIcon)`
  font-size: 16px !important;
`;
