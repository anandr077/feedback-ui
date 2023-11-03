import styled from 'styled-components';

export const DocBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: transform 0.5s ease-in-out;
  position: relative;

  span {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;
    text-align: center;
    border-radius: 4px;
    padding: 4px;
    z-index: 100;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    display: none;
    font-family: 'IBM Plex Sans', Helvetica;
    font-size: 12px;
  }

  &:hover {
    span {
      display: block;
    }
    @media (max-width: 992px) {
      span {
        display: none;
      }
    }
  }
`;


export const DocBtnImg = styled.img`
  width: 24px;
  height: 24px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const DocBtnText = styled.p`
  display: none;
  color: #1e252a;
  font-weight: 500;
  font-size: 13px;
  font-family: 'IBM Plex Sans', sans-serif;
  @media (max-width: 992px) {
    display: block;
  }
`;