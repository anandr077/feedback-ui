import React from "react";
import Notifications from "../Notifications";
import Frame4 from "../Frame4";
import styled from "styled-components";

function Frame5(props) {
  const { notificationsProps } = props;

  return (
    <Frame51>
      <Notifications src={notificationsProps.src} />
      <Frame4 />
    </Frame51>
  );
}

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

const Frame52 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: flex-end;
  gap: 28px;
  position: relative;
`;

export default Frame5;
