import React, { useState } from 'react';
import {
  AddNewCriteria,
  AddNewCriteriaButton,
  ButtonsContainer,
  CriteriaPart,
  Heading,
  HeadingContainer,
  InnerContainer,
  LeftContainer,
  MainContainer,
  OptionContainer,
  OptionIcon,
  OptionText,
  OptionsContainer,
  PreviewButton,
  PreviewButtonIcon,
  PreviewButtonText,
  RightContainer,
  SaveButton,
  SaveButtonText,
  StrengthPart,
  TableBodyPart,
  TableBodyParts,
  TableContainer,
  TableHeading,
  TableHeadingPart,
  TableRowButton,
  TableRowButtonIcon,
  TableRowButtoncont,
  TableRowText,
  TargetPart,
  TargetsPart,
  TextArea,
} from './style';

import settings from '../../static/icons/settings.svg';
import banks from '../../static/icons/banks.svg';
import marking from '../../static/icons/marking.svg';
import Eye from '../../static/icons/Eye.svg';
import Plus from '../../static/icons/Plus.svg';
import pluswhite from '../../static/icons/pluswhite.svg';
import grayEdit from '../../static/icons/edit_gray.svg';
import SecondSidebar from '../SecondSidebar';

function MarkingTemplateStrengthsTargets() {
  const [markingTemplates, setMarkingTemplates] = useState([
    {
      criteria: '',
      strengths: ['', '', ''],
      targets: ['', '', ''],
    },
  ]);

  const updateCriteria = (templateIndex, newValue) => {
    const updatedTemplates = markingTemplates.map((template, index) => {
      if (templateIndex === index) {
        return { ...template, criteria: newValue };
      }
      return template;
    });
    setMarkingTemplates(updatedTemplates);
  };

  const updateStrength = (templateIndex, strengthIndex, newValue) => {
    const updatedTemplates = markingTemplates.map((template, index) => {
      if (templateIndex === index) {
        const updatedStrengths = [...template.strengths];
        updatedStrengths[strengthIndex] = newValue;
        return { ...template, strengths: updatedStrengths };
      }
      return template;
    });
    setMarkingTemplates(updatedTemplates);
  };

  const updateTarget = (templateIndex, targetIndex, newValue) => {
    const updatedTemplates = markingTemplates.map((template, index) => {
      if (index === templateIndex) {
        const updatedTargets = [...template.targets];
        updatedTargets[targetIndex] = newValue;
        return { ...template, targets: updatedTargets };
      }
      return template;
    });
    setMarkingTemplates(updatedTemplates);
  };

  const addNewStrength = (templateIndex) => {
    let updatedTemplates = [...markingTemplates];
    updatedTemplates[templateIndex].strengths.push('');
    setMarkingTemplates(updatedTemplates);
  };
  const addNewTarget = (templateIndex) => {
    let updatedTemplates = [...markingTemplates];
    updatedTemplates[templateIndex].targets.push('');
    setMarkingTemplates(updatedTemplates);
  };

  const addNewTemplate = () => {
    let newTemplates = [...markingTemplates];
    newTemplates.push({
      criteria: '',
      strengths: ['', '', ''],
      targets: ['', '', ''],
    });
    setMarkingTemplates(newTemplates);
  };

  return (
    <>
      <MainContainer>
        <InnerContainer>
          <SecondSidebar />
          <RightContainer>
            <HeadingContainer>
              <Heading>
                New Marking Template
                <img src={grayEdit} />
              </Heading>
              <ButtonsContainer>
                <PreviewButton>
                  <PreviewButtonIcon src={Eye} />
                  <PreviewButtonText>Preview</PreviewButtonText>
                </PreviewButton>
                <SaveButton>
                  <SaveButtonText>Save Template</SaveButtonText>
                </SaveButton>
              </ButtonsContainer>
            </HeadingContainer>
            <TableContainer>
              <TableHeadingPart>
                <TableHeading>Criteria</TableHeading>
                <TableHeading>Performance Levels</TableHeading>
                <TableHeading>Targets</TableHeading>
              </TableHeadingPart>
              <TableBodyParts>
                {markingTemplates.map((markingtemplate, templateIndex) => (
                  <TableBodyPart key={templateIndex}>
                    <CriteriaPart>
                      <TextArea
                        type="text"
                        placeholder="Cut out words from the beginning and/or end of the quotation"
                        value={markingtemplate.criteria}
                        onChange={(e) =>
                          updateCriteria(templateIndex, e.target.value)
                        }
                      />
                    </CriteriaPart>
                    <StrengthPart>
                      {markingtemplate.strengths.map((strength, index) => (
                        <TextArea
                          key={index}
                          type="text"
                          placeholder={
                            index === 0
                              ? 'Cut out words from the beginning and/or end of the quotation'
                              : 'Fragment this quotation into smaller parts and integrate into different sections'
                          }
                          value={strength}
                          onChange={(e) =>
                            updateStrength(templateIndex, index, e.target.value)
                          }
                        />
                      ))}
                      <TableRowButtoncont
                        onClick={() => addNewStrength(templateIndex)}
                      >
                        <TableRowButton>
                          <TableRowButtonIcon src={Plus} />
                          <TableRowText>New Strength</TableRowText>
                        </TableRowButton>
                      </TableRowButtoncont>
                    </StrengthPart>
                    <TargetPart>
                      {markingtemplate.targets.map((target, index) => (
                        <TextArea
                          key={index}
                          type="text"
                          placeholder={
                            index === 0
                              ? 'Cut out words from the beginning and/or end of the quotation'
                              : 'Fragment this quotation into smaller parts and integrate into different sections'
                          }
                          value={target}
                          onChange={(e) =>
                            updateTarget(templateIndex, index, e.target.value)
                          }
                        />
                      ))}
                      <TableRowButtoncont
                        onClick={() => addNewTarget(templateIndex)}
                      >
                        <TableRowButton>
                          <TableRowButtonIcon src={Plus} />
                          <TableRowText>New Target</TableRowText>
                        </TableRowButton>
                      </TableRowButtoncont>
                    </TargetPart>
                  </TableBodyPart>
                ))}
              </TableBodyParts>
            </TableContainer>
            <AddNewCriteria>
              <AddNewCriteriaButton onClick={() => addNewTemplate()}>
                <TableRowButtonIcon src={pluswhite}></TableRowButtonIcon>
                <SaveButtonText>Add New Criteria</SaveButtonText>
              </AddNewCriteriaButton>
            </AddNewCriteria>
          </RightContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
}

export default MarkingTemplateStrengthsTargets;
