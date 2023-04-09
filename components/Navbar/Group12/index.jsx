import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo20px } from "../styledMixins";

function Group12() {
  return (
    <Group1>
      <Tasksquare src="/img/tasksquare@2x.png" alt="tasksquare" />
      <Home>Tasks</Home>
    </Group1>
  );
}

const Group1 = styled.div`
  margin-top: 14px;
  width: 85px;
  margin-left: 16px;
  display: flex;
  gap: 8px;
`;

const Tasksquare = styled.img`
  margin-top: 1px;
  width: 24px;
  height: 24px;
`;

const Home = styled.div`
  ${IbmplexsansNormalPersianIndigo20px}
  width: 51px;
  height: 26px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Group12;
