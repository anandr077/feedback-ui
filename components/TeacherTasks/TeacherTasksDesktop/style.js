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
  padding: 20px;
  max-height: 100vh;
  background-color: rgba(48, 27, 114, 1);
  background-image: url('img/Tasks-page-background-overlay@2x.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Frame1359 = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  gap: 23px;
  position: relative;
  align-self: stretch;
  min-height: calc(100vh - 350px);
  flex-grow: 1;
  margin: 0px auto;
  height: 90vh;
`;

export const Frame1354 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  position: relative;
  flex: 1;
  flex-grow: 1;
  max-height: 100%;
  height: fit-content;
  border-radius: 16px;
  border: 1px solid #301b7214;
  background-color: rgba(242, 241, 243, 0.9);
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
  border: 1px solid #301b7214;
  border-radius: 16px;
  background-color: rgba(242, 241, 243, 0.9);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
