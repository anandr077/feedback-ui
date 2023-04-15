import React from "react";
import Cards from "../Cards";
import styled from "styled-components";
import "./NotificationsBar.css";
import { getNotifications, getTasks } from "../../../service.js";
import Loader from "../../Loader";
function NotificationsBar(props) {
  const { notifications } = props;
  if (notifications.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  const notificationFrames = notifications.map((notification) => {
    return <Cards title={notification.title} link={notification.link} />;
  });
  console.log(notificationFrames);
  return <Frame15>{notificationFrames}</Frame15>;
}

const Frame15 = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  padding: 10px;
  position: relative;
  align-self: stretch;
  z-index: 1;
  height: 100%;
  flex-direction: column;
`;

export default NotificationsBar;
