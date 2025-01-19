import React from 'react';
import { DialogContent, Dialog } from '@mui/material';
import {
  TitleContainer,
  Title,
  Para,
  CopyLinkSection,
  CloseIcon,
  LinkText,
  MainContainer,
  ParaGroups,
} from './style';
import RoundedBorderSubmitBtn from '../Buttons/RoundedBorderSubmitBtn';
import LinkIcon from '@mui/icons-material/Link';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast';

const copyLinkDialog = ({handleCoplyLinkClose, link, title, para1, para2}) => {

    const handleCopyToClipboard = () => {
      navigator.clipboard
        .writeText(link)
        .then(() => {
          toast(<Toast message={'Share link copied'} />);
          handleCoplyLinkClose();
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    };

  return (
    <Dialog open={true} onClose={handleCoplyLinkClose}>
      <DialogContent style={{ maxWidth: '400px' }}>
        <MainContainer>
          <TitleContainer>
            <Title>{title}</Title>
            <CloseIcon
              src="/img/closecircle.svg"
              onClick={handleCoplyLinkClose}
            />
          </TitleContainer>
          <ParaGroups>
            {para1 && <Para>{para1}</Para>}
            {para2 && <Para>{para2}</Para>}
          </ParaGroups>
          <CopyLinkSection>
            <LinkIcon />
            <LinkText>{link}</LinkText>
            <RoundedBorderSubmitBtn
              text={'Copy'}
              onClickFn={handleCopyToClipboard}
            />
          </CopyLinkSection>
        </MainContainer>
      </DialogContent>
    </Dialog>
  );
};

export default copyLinkDialog;
