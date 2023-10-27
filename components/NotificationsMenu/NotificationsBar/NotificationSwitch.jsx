import React from 'react'
import { NotificationBtnContainer, Button } from './notificationSwitchStyle';
import { useState } from 'react';

const NotificationSwitch = ({notificationBtnValue, totalNotifications, totalRequests}) => {
    const [activeBtn, setActiveBtn] = useState('URL')
    const handleContainerClick = (e) =>{
        e.stopPropagation()
    }
    const handleBtnClick = (value) =>{
        setActiveBtn(value)
        notificationBtnValue(value)
    }
  return (
    <NotificationBtnContainer  onClick={handleContainerClick}>
        <Button
           onClick={()=> handleBtnClick('URL')}
           className={activeBtn === 'URL' ? 'active' : ''}
        >
            Notifications ({totalNotifications})
        </Button>
        <Button
          onClick={()=> handleBtnClick('FEEBACK_REQUEST')}
          className={activeBtn === 'FEEBACK_REQUEST' ? 'active': ''}
        >
            Requests ({totalRequests})
        </Button> 
    </NotificationBtnContainer>
  )
}

export default NotificationSwitch