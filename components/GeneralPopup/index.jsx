import React from 'react'
import styled from "styled-components";
import { isMobileView } from "../ReactiveRender";
import { IbmplexsansSemiBoldShark24px, IbmplexsansSemiBoldWhite16px} from "../../styledMixins";

export default function GeneralPopup(props) {

const {hidePopup, buttonText, textContent, title, confirmButtonAction} = props;

const content =<><TitleContainer>
<DeleteTitle>{title}</DeleteTitle>
</TitleContainer>
<Line141 src="/img/line-14@2x.png" />
<TextContent>{textContent}</TextContent>
<ButtonsContainer>
<CancelButton onClick={ ()=> hidePopup()}>Cancel</CancelButton>
<ProceedButton onClick={()=> confirmButtonAction()}>
{buttonText}
</ProceedButton>
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

const ArrowrightSmall = styled.img`
  position: relative;
  min-width: 18px;
  height: 18px;
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
    transform: scale(1.1);
    }
`;

const ProceedButton = styled.div`
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
    transform: scale(1.1);
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
position: fixed;
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
position: fixed;
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