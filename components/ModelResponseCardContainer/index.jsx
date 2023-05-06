import React from "react";
import DashboardGroup1205 from "../DashboardGroup1205";
import TaskCard from "../Cards";
import styled from "styled-components";
import { IbmplexsansMediumRiverBed24px } from "../../styledMixins";

function ModelResponseCardContainer(props) {
  const { allTasks, group1205Props, line17 } = props;
  const cards = allTasks.map((task) => {
    return <TaskCard task={cardContents(task)} />;
  });

  return (
    <Frame13401>
      <Frame1338>
        <ExemplarResponses>Exemplar responses</ExemplarResponses>
        <DashboardGroup1205 className={group1205Props.className} />
      </Frame1338>
      <Line17 src={line17} alt="Line 17" />
      <Frame12>{cards}</Frame12>
    </Frame13401>
  );
}

function cardContents(exemplar) {
  return  {
    title:exemplar.assignmentTitle,
    para:exemplar.response,
    subTitle:"Teacher's Comment",
    subPara:exemplar.comment,
    // date:formattedDate(task.dueAt),
    // status1:"Submissions: 20 of 40",
    // status2:"Reviewed: 10 of 20",
  };;
  
  
}

const Frame13401 = styled.div`
  display: flex;
  flex-direction: column;
  width: 581px;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1338 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const ExemplarResponses = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Line17 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 581px;
  height: 1px;
  object-fit: cover;
`;

const Frame12 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
  max-height: 500px;
  scroll-behavior: smooth;
  overflow-y: scroll;
`;

const Frame13402 = styled.div`
  display: flex;
  flex-direction: column;
  width: 581px;
  align-items: flex-start;
  gap: 20px;
  padding: 20px 0px;
  position: relative;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame13381 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

const ExemplarResponses1 = styled.div`
  ${IbmplexsansMediumRiverBed24px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Line171 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 581px;
  height: 1px;
  object-fit: cover;
`;

const Frame121 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 20px;
  position: relative;
  align-self: stretch;
`;

export default ModelResponseCardContainer;
