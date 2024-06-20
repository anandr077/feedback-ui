import React from 'react';
import dayjs from 'dayjs';
import styled from 'styled-components';
import { extendDueAtAssignment } from '../../service';
import { isMobileView } from '../ReactiveRender';
import DateSelector from '../DateSelector';
import {
  IbmplexsansSemiBoldShark24px,
  IbmplexsansSemiBoldWhite16px,
} from '../../styledMixins';
import { DialogContent, Dialog } from '@mui/material';
import Toast from '../Toast';
import { toast } from 'react-toastify';

export default function ExtendAssignmentPopup(props) {

  const { assignment, hideDateExtendPopup } = props;

  const [dueAt, setDueAt] = React.useState(assignment?.dueAt);

  const extendDueAtHandler = () => {
    extendDueAtAssignment(assignment.id, {
      dueAt: dueAt,
    }).then((res) => {
      window.location.href = '#tasks';
      window.location.reload();
    });
    hideDateExtendPopup();
    toast(<Toast message={'Task due time changed'} />);
  };

  const dateSelectorFrame = (
    <DateSelector
      value={dayjs(assignment?.dueAt)}
      onChange={(newValue) => setDueAt(newValue)}
    />
  );

  const textContent = `Set new due time for ${assignment?.title}`;

  const content = (
    <>
      <TitleContainer>
        <Arrowright src="/icons/clock.svg" alt="clock" />
        <DeleteTitle>Change due time</DeleteTitle>
      </TitleContainer>
      <Line141 src="/img/line-14@2x.png" />
      <TextContent>{textContent}</TextContent>
      <TextContent>{dateSelectorFrame}</TextContent>
      <ButtonsContainer>
        <CancelButton onClick={() => hideDateExtendPopup()}>
          Cancel
        </CancelButton>
        <CancelButton onClick={() => extendDueAtHandler()}>Change</CancelButton>
      </ButtonsContainer>
    </>
  );

  return (
    <Dialog open={open} onClose={() => hideDateExtendPopup()}>
      <DialogContent>
        {isMobileView() ? (
          <DeleteAssignmentPopupContainerSmall>
            {content}
          </DeleteAssignmentPopupContainerSmall>
        ) : (
          <DeleteAssignmentPopupContainer>
            {content}
          </DeleteAssignmentPopupContainer>
        )}
      </DialogContent>
    </Dialog>
  );
}

const DeleteTitle = styled.div`
  display: flex;
  width: 277.333px;
  flex-direction: column;
  flex-shrink: 0;
  color: #505050;
  font-size: 16px;
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  margin-bottom: 20px;
  margin-right: 40px;
  padding-top: 30px;
`;

const IconTrash = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Arrowright = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const ArrowrightSmall = styled.img`
  position: relative;
  min-width: 18px;
  height: 18px;
`;
const CancelButton = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 30px;
  border: 1px solid var(--light-mode-purple, #7200e0);
  background: var(--light-mode-purple, #7200e0);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const DeleteButton = styled.div`
  ${IbmplexsansSemiBoldWhite16px}
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 30px;
  border: 1px solid #cc2929;
  background: #cc2929;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

const TextContent = styled.div`
  ${IbmplexsansSemiBoldShark24px}
  display: flex;
  width: 90%;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  padding-top: 20px;
`;

const DeleteAssignmentPopupContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 500px;
  z-index: 1000;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
`;

const DeleteAssignmentPopupContainerSmall = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 90%;
  top: 50%;
  left: 50%;
  z-index: 1000;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.1);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 30px;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 10px;
`;

const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;
