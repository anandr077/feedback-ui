import styled from 'styled-components';
import { IbmplexsansNormalShark20px } from '../../styledMixins';
// import {
//   IbmplexsansNormalShark20px,
//   IbmplexsansNormalElectricViolet14px,
// } from '../../styledMixins';

// export const TextInputEditable = styled.textarea`
//   ${IbmplexsansNormalShark20px}
//   position: relative;
//   width: 100%;
//   flex: 1;
//   margin-top: -1px;
//   letter-spacing: 0;
//   line-height: normal;
//   border-color: transparent;
//   box-shadow: 0px;
//   outline: none;
//   transition: 0.15s;
//   resize: none;
// `;

// export const TextBox = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
//   padding: 13px 20px;
//   position: relative;
//   align-self: stretch;
//   background-color: var(--white);
//   border-radius: 12px;
//   border: 1px solid;
//   border-color: var(--text);
// `;

// export const SmartAnnotationContainer = styled.div`
//   display: flex;
//   padding: 16px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 16px;
//   align-self: stretch;
//   border-radius: 12px;
//   border: 1px solid #f1e7ff;
//   background: #fff;
//   box-shadow: 0px 2px 14px 0px rgba(114, 0, 224, 0.1);
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   gap: 8px;
//   align-items: center;
//   justify-content: flex-start;
//   flex-direction: row;
//   background: #ffffff;
// `;

// export const ButtonLabel = styled.div`
//   ${IbmplexsansNormalElectricViolet14px}
//   font-size: 16px;
//   color: var(--light-mode-purple, #7200e0);
//   cursor: pointer;
// `;

// export const PlusImage = styled.img`
//   position: relative;
//   min-width: 20px;
//   height: 20px;
//   cursor: pointer;
// `;

// export const TtitleContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
//   align-items: center;
//   padding-bottom: 10px;
//   border-bottom: 1px solid #f1e6fc;
// `;

// export const ButtonBox = styled.div`
//   position: relative;

//   span {
//     position: absolute;
//     background-color: rgba(0, 0, 0, 0.75);
//     color: #fff;
//     text-align: center;
//     border-radius: 4px;
//     padding: 4px;
//     z-index: 100;
//     bottom: 125%;
//     left: 50%;
//     transform: translateX(-50%);
//     white-space: nowrap;
//     display: none;
//     font-family: 'IBM Plex Sans', Helvetica;
//     font-size: 12px;
//   }

//   &:hover {
//     span {
//       display: block;
//     }
//   }
// `;

// export const DeleteButton2 = styled.img`
//   cursor: pointer;
//   width: 24px;
//   height: 24px;
// `;

// export const Line14 = styled.img`
//   position: relative;
//   align-self: stretch;
//   width: 100%;
//   height: 1px;
//   object-fit: cover;
// `;

// export const SmartAnnotationTitleContainer = styled.div`
//   cursor: pointer;
//   display: flex;
//   padding: 16px;
//   align-items: flex-start;
//   gap: 20px;
//   align-self: stretch;
//   border-radius: 12px;
//   border: 1px solid #f1e7ff;
//   background: #fff;
//   box-shadow: 0px 2px 14px 0px rgba(114, 0, 224, 0.1);
// `;

// export const Title = styled.div`
//   color: var(--text);
//   font-family: var(--font-family-ibm_plex_sans);
//   font-size: var(--font-size-l);
//   font-weight: 400;
//   font-style: normal;
//   line-height: 20.8px;
//   position: relative;
//   flex: 1;
//   margin-top: -1px;
//   letter-spacing: 0;
//   line-height: normal;
//   cursor: pointer;
// `;

// export const Arrowdown2 = styled.img`
//   position: relative;
//   min-width: 24px;
//   height: 24px;
//   margin-left: ${(props) => (props.left ? '25px' : '0px')};
//   cursor: pointer;
// `;

// export const SubmitButton = styled.div`
//   display: flex;
//   padding: 8px 16px;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
//   border-radius: 30px;
//   border: 1px solid #7200e0;
//   color: #ffffff;
//   background: #7200e0;
//   cursor: pointer;
//   text-align: center;
//   font-size: 16px;
//   font-family: IBM Plex Sans;
//   font-weight: 500;
//   :hover {
//     scale: 1.1;
//   }
// `;

// export const ButtonWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: flex-start;
//   gap: 8px;
//   align-self: stretch;
// `;
// export const SixdotsImage = styled.img`
//   width: 15px;
//   height: 24px;
//   padding-right: 8px;
// `;

export const MainConatiner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LeftConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  border-right: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  height: 90vh;
`;
export const RightConatiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

export const LeftConatinerHeading = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  margin-bottom: 5px;
`;
export const LeftConatinerHeadingText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4b464f;
`;
export const RightConatinerHeading = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 20px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
`;
export const RightConatinerHeadingText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 500;
  line-height: 20.8px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #4b464f;
`;

export const FeedbackAreasContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  gap: 8px;
  height: 90vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  position: relative;
`;
export const DotIconImage = styled.img`
  width: 10px;
  height: 10px;
  display: none;
`;

export const FeedbackAreaCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#F1E6FC' : '#fff')};
  border-radius: 6px;
  ${DotIconImage} {
    display: ${(props) => (props.showPopUp ? 'flex' : '')};
  }
  &:hover {
    ${DotIconImage} {
      display: flex;
    }
  }
`;
export const FeedbackAreaText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: ${(props) => (props.selected ? '500' : '400')};
  line-height: 24px;
  letter-spacing: -0.01em;
  text-align: left;
  color: ${(props) => (props.selected ? '#7200E0' : '#4B464F')};
`;

export const SpecificCommentsCont = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;
export const PlusImage = styled.img`
  width: 23px;
  height: 23px;
`;

export const IconsContainer = styled.div`
  flex-direction: row;
  gap: 5px;
  display: none;
`;

export const SpecificComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border: 0px 0px 1px 0px;
  border-bottom: 1px solid var(--color-neutral-alpha-90, #c9c6cc80);
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #f2f1f380;
    ${IconsContainer} {
      display: flex;
    }
  }
`;

export const TextInputEditable = styled.textarea`
  ${IbmplexsansNormalShark20px}
  position: relative;
  width: 100%;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
`;

export const SpecificCommentText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #56515b;
`;

export const DotContainerPopUp = styled.div`
  width: 130px;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 3px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid var(--color-neutral-80, #f2f1f3);
  position: absolute;
  top: calc(100% + 5px);
  right: 0px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px;
  gap: 6px;
  &:hover {
    background-color: #f2f1f380;
  }
`;
export const OptionText = styled.p`
  font-family: IBM Plex Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #4b464f;
`;
export const Optionicon = styled.img`
  width: 24px;
  height: 24px;
`;
