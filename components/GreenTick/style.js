import styled from 'styled-components';

export const StatusSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  justify-content: flex-start;
  margin: ${(props) => (props.margin ? '0px 16px' : '0px 0px')};
`;

export const StatusSmallTick = styled.img`
  width: 17px;
  height: 17px;
`;
export const StatusText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;
  color: #00875a;
`;
export const HeadingDropdown = styled.div`
  display: flex;
  gap: 4px;
  img {
    height: 16px;
    width: 16px;
  }
`;
