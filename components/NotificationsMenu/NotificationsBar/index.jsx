import React from "react";
import Cards from "../Cards";
import Cards2 from "../Cards2";
import Cards3 from "../Cards3";
import styled from "styled-components";
import "./NotificationsBar.css";
import { getNotifications, getTasks } from "../../../service.js";
function NotificationsBar() {
  const [notification, setNotifications] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  

  React.useEffect(() => {
    getNotifications().then((result) => {
      setNotifications(result);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const notificationFrames = notification.map(notification=>{
    <Cards title={notification.title} link={notification.link}/>
  })
  return (
    <div className="notifications-bar screen">
      <Frame15>
        {notificationFrames}
      </Frame15>
    </div>
  );
}

const Frame15 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  flex: 1;
`;

export default NotificationsBar;
