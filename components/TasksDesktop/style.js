import styled from 'styled-components';

export const TaskScreenMainContainer = styled.div`
  background-color: var(--white-pointer);
  border: 1px none;
  display: flex;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  a {
    display: contents;
    text-decoration: none;
  }
`;

export const Frame1361 = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100vw - 305px);
  align-items: center;
  justify-content: flex-start;
  position: relative;
  border-top: 1px solid #e3e3e3;
`;

export const Frame1360 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  position: relative;
  align-self: stretch;
`;

export const FixedWidthDiv = styled.div`
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  background-color: rgba(48, 27, 114, 1);
  background-image: url('img/Tasks-page-background-overlay@2x.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Frame1359 = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  gap: 23px;
  position: relative;
  align-self: stretch;
  height: 90vh;
  flex-grow: 1;
  margin: 0 auto;
`;

export const Frame1354 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  position: relative;
  flex: 1;
  max-height: 100%;
  height: fit-content;
  background-color: rgba(242, 241, 243, 0.9);
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  position: relative;
  flex: 1;
  flex-grow: 1;
  max-height: 100%;
  height: fit-content;
  background-color: rgba(242, 241, 243, 0.9);
  border-radius: 16px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
export const TitleAndFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 0px 20px;
  border-bottom: 1px solid #c9c6cc80;
  border-top: 1px solid #c9c6cc80;
`;
export const TitleAndSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const TitleImage = styled.img`
  padding: 2px 2px 2px 2px;
  align-items: center;
  gap: 10px;
  width: 24px;
  height: 24px;
`;

export const SubtitleCon = styled.p`
  display: flex;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;
`;
