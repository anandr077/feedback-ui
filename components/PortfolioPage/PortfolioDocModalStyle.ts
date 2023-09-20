import styled from 'styled-components';

const ModalBody = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background-color: white;
  width: min(600px, 90%);
  height: 351px;
  border-radius: 12px;
  padding: 16px 0;
  border-top: 1px solid #f1e7ff;
`;

const ModalContainerHeader = styled.div`
  padding: 0 16px 16px;
  border-bottom: 1px solid #f1e6fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ModalHeaderText = styled.p`
  color: #505050;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  font-family: 'IBM Plex Sans', Helvetica;
`;


export {
  ModalBody,
  ModalContainer,
  ModalContainerHeader,
  ModalHeaderText,
};
