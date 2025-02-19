import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowUp from '../../static/img/arrowup2.svg';
import ArrowDown from '../../static/img/arrowdown2.svg';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ModalForSelectOption = ({ onClose, optionsToSelect, onClickOption }) => {
  const [showCommentSuggestions, setShowCommentSuggestions] = useState(false);

  const handleAccordionChange = (panelIndex) => (event, isExpanded) => {
    setShowCommentSuggestions(isExpanded ? panelIndex : null);
  };

  return (
    <MainContainer>
      <ModalContent>
        {optionsToSelect?.map((comment, idx) => (
          <StyledAccordion
            key={idx}
            expanded={showCommentSuggestions === idx}
            onChange={handleAccordionChange(idx)}
            sx={{
              boxShadow: 'none',
              '&:before': { display: 'none' },
            }}
          >
            <StyledAccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${idx}-content`}
              id={`panel${idx}-header`}
            >
              {comment.title}{' '}
            </StyledAccordionSummary>
            {comment?.suggestions?.map((suggestion, index) => (
              <StyledAccordionDetails
                key={index}
                onClick={() => {
                  onClickOption(comment.title + '\n\n' + suggestion);
                  onClose(false);
                }}
              >
                {suggestion}
              </StyledAccordionDetails>
            ))}
          </StyledAccordion>
        ))}
      </ModalContent>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 336px !important;
  flex: 1;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const StyledAccordionSummary = styled(AccordionSummary)`
  && {
    min-height: auto !important;
  }
  &&.Mui-expanded {
    min-height: auto !important;
  }
  & .MuiAccordionSummary-content {
    margin: 0 !important;
  }

  background-color: rgba(242, 241, 243, 1) !important;
  padding: 6px 12px !important;
  font-family: var(--font-family-ibm_plex_sans);
  color: rgba(86, 81, 91, 1) !important;
  font-weight: 600;
  font-size: var(--font-size-s);
  line-height: 17px;
  border-bottom: 1px solid rgba(201, 198, 204, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const StyledAccordion = styled(Accordion)`
  border-bottom: 1px solid rgba(201, 198, 204, 0.5);
  font-family: var(--font-family-ibm_plex_sans);
  color: rgba(86, 81, 91, 1) !important;
  font-weight: 400;
  font-size: var(--font-size-s);
  margin: 0 !important;
  line-height: 17px;
  cursor: pointer;

  & .MuiAccordionSummary-content.Mui-expanded {
    margin: 0 !important;
  }

  &:hover {
    background-color: #f8f8f8;
  }
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  padding-left: 20px !important;
`;



export default ModalForSelectOption;
