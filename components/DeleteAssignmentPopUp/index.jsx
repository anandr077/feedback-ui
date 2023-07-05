import React from 'react'
import styled from "styled-components";
import {deleteAssignment, updateAssignment} from "../../service";
import SnackbarContext from "../SnackbarContext";
import { isMobileView } from "../ReactiveRender";
import { IbmplexsansNormalShark20px , IbmplexsansSemiBoldShark24px, IbmplexsansSemiBoldWhite16px} from "../../styledMixins";

export default function DeleteAssignmentPopup(props) {

  const { showSnackbar } = React.useContext(SnackbarContext);

  const {assignmentId, hidedeletePopup} = props;

 

  const deleteAssignmentHandler = () => {
      deleteAssignment(assignmentId.id).then((res) => {
        window.location.href = "#tasks";
        window.location.reload();
      });    
      hidedeletePopup();
      showSnackbar("Task deleted");
};

const textContent = `Are you sure you want to permanently delete ${assignmentId.title} ?`;

const content =<><TitleContainer>
<Arrowright src="/icons/trash-can.svg" alt="delete" />
<DeleteTitle>Delete Task</DeleteTitle>
</TitleContainer>
<Line141 src="/img/line-14@2x.png" />
<TextContent>{textContent}</TextContent>
<ButtonsContainer>
<CancelButton onClick={ ()=> hidedeletePopup()}>Cancel</CancelButton>
<DeleteButton onClick={deleteAssignmentHandler}>
<Arrowright src="/icons/trash-can-white.svg" alt="delete" />
Delete
</DeleteButton>
</ButtonsContainer>
</>;

  return (<>
  {
isMobileView() ? <DeleteAssignmentPopupContainerSmall>
{content}
</DeleteAssignmentPopupContainerSmall>
:
    <DeleteAssignmentPopupContainer>
    {content}
    </DeleteAssignmentPopupContainer>

  }
  </>
   
  )
}

const DeleteTitle = styled.div`
display: flex;
width: 277.333px;
flex-direction: column;
flex-shrink: 0;
color: #505050;
font-size: 16px;
font-family: IBM Plex Sans;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const ButtonsContainer = styled.div`
display: flex;
width: 100%;
flex-direction: row;
align-items: center;
justify-content: flex-end;
gap: 20px;
margin-bottom: 20px;
margin-right: 40px;
padding-top: 50px;
`;

const IconTrash = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const Arrowright = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const CancelButton = styled.div`
${IbmplexsansSemiBoldWhite16px}
display: inline-flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 8px;
border-radius: 30px;
border: 1px solid var(--light-mode-purple, #7200E0);
background: var(--light-mode-purple, #7200E0);
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover {
    transform: scale(1.2);
    }
`;

const DeleteButton = styled.div`
${IbmplexsansSemiBoldWhite16px}
display: inline-flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 4px;
border-radius: 30px;
border: 1px solid #CC2929;
background: #CC2929;
cursor: pointer;
transition: all 0.2s ease-in-out;   
&:hover {
    transform: scale(1.2);
    }
`;


const TextContent = styled.div`
${IbmplexsansSemiBoldShark24px}
display: flex;
width: 90%;
flex-direction: column;
flex-shrink: 0;
align-items: flex-start;
padding-top: 20px

`;

const DeleteAssignmentPopupContainer = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
width: 600px;
z-index: 1000;
align-items: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 12px;
background: #FFF;
box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.10);
`;

const DeleteAssignmentPopupContainerSmall = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
position: absolute;
width: 90%;
top: 50%;
left: 50%;
z-index: 1000;
transform: translate(-50%, -50%);
border-radius: 12px;
background: #FFF ;
box-shadow: 0px 4px 16px 0px rgba(114, 0, 224, 0.10);
`;

const TitleContainer = styled.div`
display: flex;
justify-content: flex-start;
width: 100%;
margin-left: 30px;
gap: 10px;
align-items: center;
margin-top: 20px;
padding-bottom: 10px;
`;


const Line141 = styled.img`
  position: relative;
  align-self: stretch;
  height: 1px;
  object-fit: cover;
`;