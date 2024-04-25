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
  gap: 20px;
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
  padding: 0px 20px;
  max-height: 100vh;
`;

export const Frame1359 = styled.div`
  display: flex;
  width: 100%;
  gap: 32px;
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
  background-color: #f2f1f3;
  border-radius: 16px;
  border: 1px solid #301b7214;
  box-shadow: inset 0 0 1px 2px rgba(48, 27, 114, 0.04);
`;

export const Frame1358 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0px;
  position: relative;
  flex: 1;
  flex-grow: 1;
  border: 1px solid #301b7214;
  background-color: #f2f1f3;
  border-radius: 16px;
  box-shadow: 0px 4px 22px #2f1a720a;
`;
