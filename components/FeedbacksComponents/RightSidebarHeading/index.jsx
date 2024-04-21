import React from 'react';
import {
    Container
} from './style';
import CloseIcon from '../../../static/img/close.svg';

const RightSidebarHeading = ({title, handleClose}) => {
  return (
    <Container>
        {title}
        <img src={CloseIcon} onClick={() => handleClose('')} />
    </Container>
  )
}

export default RightSidebarHeading