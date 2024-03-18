import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import styled from 'styled-components';

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 885px;
  border-radius: 12px;
`;

export const PopupTitleContainer = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border: 0 0 1px 0;
  background: #ffffff;
  border-bottom: 1px solid #c9c6cc80;
`;
export const PopupTitle = styled.p`
  font-family: IBM Plex Sans;
  font-size: 19px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4b464f;
`;

export const PopupTitleImg = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const PopupDialogContentBox = styled(DialogContent)`
  display: flex;
  flex-direction: row;
  padding: 0px !important;
`;
export const PopupDialogContentBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 300px;
  border-right: 1px solid #c9c6cc80;
`;
export const PopupDialogContentBoxRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 300px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const CardContainer = styled.div`
  border: 0 0 1px 0;
  border-bottom: 1px solid #c9c6cc80;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  gap: 10px;
  border: 0 0 1px 0;
  border-bottom: 1px solid #c9c6cc80;
  background: #ffffff;
  cursor: pointer;
`;
export const CardImgCont = styled.div`
  padding: 8px;
  gap: 2px;
  border-radius: 4px;
  border: 1;
  border: 1px solid #c9c6cc;
`;
export const CardImg = styled.img`
  width: 30px;
  height: 30px;
`;
export const CardImgDoc = styled.img`
  width: 46px;
  height: 46px;
`;
export const CardTitle = styled.div`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #4b464f;
`;

export const PreviewContainer = styled.div`
  padding: 15px;
  gap: 5px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
`;

export const PrevieImg = styled.img`
  width: 24px;
  height: 24px;
`;
export const Previewpara = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4b464f;
`;

export const BankCommentTitle = styled.p`
  padding: 10px;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  background: #f2f1f3;
  color: #4b464f;
`;

export const Commentsuggestion = styled.p`
  padding: 10px;
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  background: #ffffff;
  color: #4b464f;
  border-bottom: 1px solid #c9c6cc80;
`;

export const ButtonConatiner = styled(DialogActions)`
padding: 10px;
gap: 10px
border: 1px 0 0 0;
border-top: 1px solid #C9C6CC80;
background: #FFFFFF;
`;

export const CreateButton = styled.div`
  padding: 10px;
  border-radius: 30px;
  background: #7200e0;
`;

export const ButtonText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
