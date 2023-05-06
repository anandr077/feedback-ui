import React from "react";
import styled from "styled-components";
import {
  IbmplexsansNormalShark20px, IbmplexsansMediumElectricViolet20px, IbmplexsansMediumWhite16px
} from "../../styledMixins";
import CardContent from "../CardContent";
import { useRef, useEffect } from "react";
import SnackbarContext from "../SnackbarContext"

import StatusBubbleContainer from "../StatusBubblesContainer";
import { denyModelResponse, publishModelResponse } from "../../service";
function TaskCard(props) {
 const { showSnackbar } = React.useContext(SnackbarContext);

 const { task, small, exemplar, isSelected, setPublishActionCompleted } = props;
 console.log("setPublishActionCompleted in TC" + setPublishActionCompleted)
 const refContainer = useRef(null); 
 useEffect(() => { 
  if (isSelected) {
    refContainer.current.scrollIntoView({ behavior: "smooth", block: "start" }); 
  }
  }
 );
  
  return (
    createTaskCard(task, refContainer, isSelected, exemplar, small, showSnackbar, setPublishActionCompleted)
  );
}

const saveButtons = (id, showSnackbar, setPublishActionCompleted)=> {
  return <Frame12191>
    <SLink onClick={e=>{
      denyModelResponse(id)
      .then((res) => {
      console.log("##", res);
      if (res.status === "DENIED") {
        showSnackbar("Response won't be shared with your class", res.link);
        setPublishActionCompleted(true)
      } else {
        // setPopupMessage("Assignment Creation Failed");
        // setShowPopup(true);
        return;
      }
    });
    }
    }>No</SLink>
    <Buttons1>
      <Button onClick={e=>{
        publishModelResponse(id)
          .then((res) => {
          console.log("##", res);
          if (res.status === "PUBLISHED") {
            showSnackbar("Response shared with your class", res.link);
            setPublishActionCompleted(true)
          } else {
            // setPopupMessage("Assignment Creation Failed");
            // setShowPopup(true);
            return;
          }
        });
      }
      }>Yes</Button>
    </Buttons1>
  </Frame12191>
}
function createTaskCard(task, refContainer, isSelected, exemplar, small, showSnackbar, setPublishActionCompleted) {
  if (exemplar) {
    if (task.status === "AWAITING_APPROVAL") {
    return <StyledCard  ref={refContainer} isSelected={isSelected}>
          <TaskTitle>Congratulations,<br/>
          Teacher has marked part of your response as an exemplar!
          </TaskTitle>
        <a href={task.link}>
            <StyledCard>
              <CardContent task={cardContents(task, exemplar)} small={small} />
            </StyledCard> 
        </a>
        <TaskTitle>Are you happy to share this with your class?</TaskTitle>
        {saveButtons(task.id, showSnackbar, setPublishActionCompleted)}
    </StyledCard>
    }
  }
  return <a href={task.link}>
    <StyledCard ref={refContainer} isSelected={isSelected}>
      {exemplar ? <></> : tagsFrame(task)}
      <CardContent task={cardContents(task, exemplar)} small={small} />
    </StyledCard>
  </a>;
}

function cardContents(task, exemplar, acceptExemplar) {
  if (!exemplar) {
    return  {
      title:task.classTitle,
      para:task.title,
      // subTitle:"Teacher's Comment",
      // subPara:"Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna.",
      date:task.dueAt,
      status1:task.submissionCount?`Submissions: ${task.submissionCount} of ${task.expectedSubmissions}`:null,
      status2:task.submissionCount?`Reviewed: ${task.reviewCount} of ${task.submissionCount}`:null,
    };
  }
  return  {
    title:task.assignmentTitle,
    para:task.response,
    subTitle:"Teacher's Comment",
    subPara:task.comment,
    // date:formattedDate(task.dueAt),
    // status1:"Submissions: 20 of 40",
    // status2:"Reviewed: 10 of 20",
  };
}
function tagsFrame(task) {
  if (task.tags && task.tags.length > 0) {
    return <StatusBubbleContainer tags={task?.tags ?? []} />;
  }
  return <></>;
}


const TaskTitle = styled.p`
  ${IbmplexsansNormalShark20px}
  font-size: 16px;
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;
const Frame12191 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const SLink = styled.div`
  ${IbmplexsansMediumElectricViolet20px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: right;
  letter-spacing: -0.5px;
  line-height: normal;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    color: blue;
    text-decoration: underline;
  }
`;
const Buttons1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    scale: 1.2;
    transition: 0.1s;
  }
`;

const Button = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;
const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-color: var(--corn);
  border: 1px solid rgba(219, 87, 87, 0.2);

  border-radius: 16px;
  &: hover {
    background: #f9f5ff;
    border: 1px solid #7200e0;
    box-shadow: 0px 4px 16px rgba(114, 0, 224, 0.2);
  }
  
`;

export default TaskCard;
