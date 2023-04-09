import React from "react";
import Cards from "../Cards";
import Cards2 from "../Cards2";
import Cards3 from "../Cards3";
import styled from "styled-components";
import "./NotificationsBar.css";
import { getNotifications, getTasks } from "../../../service.js";
import Loader from "../../Loader";
function NotificationsBar() {
  const [notification, setNotifications] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getNotifications().then((result) => {
      setNotifications(result);
      setIsLoading(false);
    });
  }, []);

  const notificationFrames = notification.map((notification) => {
    <Cards title={notification.title} link={notification.link} />;
  });
  return isLoading ? (
    <div>
      <Loader />
    </div>
  ) : (
    <div>
      <Frame15>{notificationFrames}</Frame15>
    </div>
  );
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
