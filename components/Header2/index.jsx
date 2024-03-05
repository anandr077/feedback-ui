import React from 'react';
import {
    MainContainer,
    Logo,
    LeftSide,
    Title,
    RightSide,
    NotificationAccount,
    Notification,
    Account
} from './HeaderStyle';
import QuestionTooltip from '../../components2/QuestionTooltip';
import questionMark from '../../static/img/question-mark.svg';
import addBtnIcon from '../../static/icons/gradient_add.svg';
import notificationsIcon from '../../static/icons/notifications.svg';
import accountIcon from '../../static/icons/mask-group-4@2x.png';
import RoundedBorderLeftIconBtn from '../../components2/Buttons/RoundedBorderLeftIconBtn';

const Header = () => {
  return (
    <MainContainer>
        <LeftSide>
            <Logo src="./img/logo.svg" /> 
            <Title>
                Tasks
                <QuestionTooltip 
                   img={questionMark}
                   text="View the status of every task that you have assigned for your classes"
                />
            </Title>
        </LeftSide>
        <RightSide>
            {/* <Buttons link="#tasks/new" /> */}
            <RoundedBorderLeftIconBtn 
               onclick="#tasks/new"
               leftIcon={addBtnIcon}
               btnText="New Task"
            />
            <NotificationAccount>
                <Notification src={notificationsIcon} />
                <Account src={accountIcon} />
            </NotificationAccount>
        </RightSide>
    </MainContainer>
  )
}

export default Header