import React from "react";
import Cards from "../Cards";
import styled from "styled-components";
import "./NotificationsBar.css";
import { getNotifications, getTasks } from "../../../service.js";
import Loader from "../../Loader";
function NotificationsBar() {
  const [notifications, setNotifications] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getNotifications().then((result) => {
      setNotifications(result);
      console.log(result)
      setIsLoading(false);
    });
  }, []);

  
  if (isLoading) {  
    return <div>
      <Loader />
    </div>
   }
  const notificationFrames = notifications.map((notification) => {
    return <Cards title={notification.title} link={notification.link} />;
  });
  console.log(notificationFrames)
  return  <Frame15>{notificationFrames}</Frame15>
}

const Frame15 = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 20px;
  padding: 16px 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  z-index: 1;
  height: 100%;
  flex-direction: column;
`;

export default NotificationsBar;
