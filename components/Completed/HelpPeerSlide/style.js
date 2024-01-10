import styled from 'styled-components';

export const SliderContainer = styled.div`
  border: 1px solid #e5c9ff;
  border-radius: 16px;
  width: 1026px;
`;

export const Header = styled.div`
  background-color: #f7eeff;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px;
  border-radius: 16px 16px 0 0;

  p {
    font-weight: 500;
    font-family: var(--font-family-ibm_plex_sans);
    font-size: var(--font-size-xl);
    line-height: 26px;
    color: var(--black);
  }
`;

export const SliderMain = styled.div`
  padding: 20px;
`;

export const Slider = styled.div`
  position: relative;
  width: 100%;
`;

export const Slides = styled.div``;
