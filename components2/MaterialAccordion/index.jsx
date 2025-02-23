import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { AccordionSection, AccordionTitle } from './style.js';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MaterialAccordion = ({accordionList}) => {
    const [expanded, setExpanded] = useState(false);
    
      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    <AccordionSection>
      {accordionList.map((item, index) => (
        <Accordion
          key={index}
          disableGutters
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            boxShadow: 'none',
            borderBottom: '1px solid rgba(201, 198, 204, 0.5)',
            '&:before': { display: 'none' },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              padding: 0,
            }}
          >
            <AccordionTitle>{item.title}</AccordionTitle>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: 0,
              lineHeight: '27px',
              fontWeight: 400,
              marginBottom: '16px',
              fontFamily: 'IBM Plex Sans, sans-serif',
              '& *': {
                fontFamily: 'IBM Plex Sans, sans-serif !important',
              },
            }}
          >
            {item.content}
          </AccordionDetails>
        </Accordion>
      ))}
    </AccordionSection>
  );
};

export default MaterialAccordion;
