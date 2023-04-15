import React from "react";
import Frame1308 from "../Frame1308";
import Cards10 from "../Cards10";
import Cards11 from "../Cards11";
import styled from "styled-components";
import { groupBy, groupedData } from "lodash";
import { dateOnly } from "../../../dates.js";

function Frame14103(props) {
  const { tasks } = props;
  const groups = groupBy(tasks, (task) => dateOnly(task.completedAt));
  console.log("groups " + JSON.stringify(groups));
  const frames = Object.keys(groups).map((key) => {
    const group = groups[key];
    console.log("group " + group);
    const tasksFrames = group.map((task) => {
      return <Cards10 task={task} />;
    });
    return (
      <Frame1410>
        <Frame1308 date={key}></Frame1308>
        <Frame19>
          <>{tasksFrames}</>
        </Frame19>
      </Frame1410>
    );
  });

  return <>{frames}</>;
}

const Frame1410 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 40px;
  position: relative;
`;

const Frame19 = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

const Frame14101 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 40px;
  position: relative;
`;

const Frame191 = styled.div`
  display: flex;
  flex-direction: column;
  width: 704px;
  align-items: flex-start;
  gap: 20px;
  position: relative;
`;

export default Frame14103;
