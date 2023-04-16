import React from "react";
import Frame1308 from "../Frame1308";
import Cards6 from "../Cards6";
import Cards7 from "../Cards7";
import styled from "styled-components";
import { groupBy, groupedData } from "lodash";
import { dateOnly } from "../../../dates.js";
import Cards10 from "../Cards10";
import TaskCard from "../../TaskCard";

function Frame1410(props) {
  const { tasks, className } = props;
  const groups = groupBy(tasks, (task) => dateOnly(task.completedAt));
  const frames = Object.keys(groups).map((key) => {
    const group = groups[key];
    console.log("group " + group);
    const tasksFrames = group.map((task) => {
      return <TaskCard task={task} />;
    });
    return (
      <Frame14101 className={`frame-1410 ${className || ""}`}>
        <Frame1308 date={key}></Frame1308>
        <Frame14101 className="frame-19">
          <>{tasksFrames}</>
        </Frame14101>
      </Frame14101>
    );
  });
  return <>{frames}</>;
}

const Frame14101 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  position: relative;
  align-self: stretch;

  &.frame-1410.frame-1413-1 {
    width: fit-content;
    align-self: unset;
  }
`;

const Frame1314 = styled.div`
  .frame-1410.frame-1413-1 & {
    width: 350px;
    align-self: unset;
  }
`;

export default Frame1410;
