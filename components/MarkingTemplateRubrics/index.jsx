import React, { useState } from 'react';

import settings from '../../static/icons/settings.svg';
import banks from '../../static/icons/banks.svg';
import marking from '../../static/icons/marking.svg';
import Eye from '../../static/icons/Eye.svg';
import Plus from '../../static/icons/Plus.svg';
import pluswhite from '../../static/icons/pluswhite.svg';
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
  TableBodyParts,
  TableContainer,
  TableHeading,
  TableRowButton,
  TableRowButtonIcon,
  TableRowText,
  TargetPart,
  TargetsPart,
  TextArea,
} from '../MarkingTemplateStrengthsTargets/style';
import {
  BodyHeading,
  BodyHeadingPart,
  LevelAndDescPart,
  LevelDescPart,
  LevelPart,
  TableBodyPart,
  TableHeadingPart,
  TableRowButtoncont,
} from './style';

function MarkingTemplateRubrics() {
  const [markingTemplatesRubrics, setMarkingTemplatesRubrics] = useState([
    {
      criteria: '',
      performanceLevels: [{ '': '' }, { '': '' }, { '': '' }],
    },
  ]);

  const updateCriteria = (templateIndex, newValue) => {
    const updatedTemplates = markingTemplatesRubrics.map((template, index) => {
      if (templateIndex === index) {
        return { ...template, criteria: newValue };
      }
      return template;
    });
    setMarkingTemplatesRubrics(updatedTemplates);
  };

  const updateLevel = (templateIndex, strengthIndex, newValue) => {
    const updatedRubrics = markingTemplatesRubrics.map((template, index) => {
      if (templateIndex === index) {
        return {
          ...template,
          performanceLevels: template.performanceLevels.map((level, index) => {
            if (strengthIndex == index) {
              return { [newValue]: level[Object.keys(level)[0]] };
            }
            return level;
          }),
        };
      }
      return template;
    });
    setMarkingTemplatesRubrics(updatedRubrics);
  };

  const updateLevelDesc = (templateIndex, targetIndex, newValue) => {
    const updatedRubrics = markingTemplatesRubrics.map((template, index) => {
      if (index === templateIndex) {
        return {
          ...template,
          performanceLevels: template.performanceLevels.map((level, index) => {
            if (index === targetIndex) {
              return { [Object.keys(level)[0]]: newValue };
            }
            return level;
          }),
        };
      }
      return template;
    });
    setMarkingTemplatesRubrics(updatedRubrics);
  };

  const addLevel = (templateIndex) => {
    let updatedTemplates = [...markingTemplatesRubrics];
    updatedTemplates[templateIndex].performanceLevels.push({ '': '' });
    setMarkingTemplatesRubrics(updatedTemplates);
  };

  //   const addNewTemplate = () => {
  //     let newTemplates = [...markingTemplates];
  //     newTemplates.push({
  //       criteria: '',
  //       strengths: ['', '', ''],
  //       targets: ['', '', ''],
  //     });
  //     setMarkingTemplates(newTemplates);
  //   };

  return (
    <>
      <MainContainer>
        <InnerContainer>
          <LeftContainer>
            <OptionsContainer>
              <OptionContainer>
                <OptionIcon src={settings} />
                <OptionText>User Settings</OptionText>
              </OptionContainer>
              <OptionContainer style={{ background: '#F1E6FC' }}>
                <OptionIcon src={marking} />
                <OptionText>Marking Templates</OptionText>
              </OptionContainer>
              <OptionContainer>
                <OptionIcon src={banks} />
                <OptionText>Comment Banks</OptionText>
              </OptionContainer>
            </OptionsContainer>
          </LeftContainer>
          <RightContainer>
            <HeadingContainer>
              <Heading>New Marking Template</Heading>
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
              </TableHeadingPart>
              <BodyHeadingPart>
                <BodyHeading></BodyHeading>
                <BodyHeading>Level</BodyHeading>
                <BodyHeading>Level Description</BodyHeading>
              </BodyHeadingPart>
              <TableBodyParts>
                {markingTemplatesRubrics.map(
                  (markingTemplatesRubric, templateIndex) => (
                    <TableBodyPart key={templateIndex}>
                      <CriteriaPart>
                        <TextArea
                          type="text"
                          placeholder="Cut out words from the beginning and/or end of the quotation"
                          value={markingTemplatesRubric.criteria}
                          onChange={(e) =>
                            updateCriteria(templateIndex, e.target.value)
                          }
                        />
                      </CriteriaPart>
                      <LevelAndDescPart>
                        <LevelPart>
                          {markingTemplatesRubric.performanceLevels
                            .map((obj) => Object.keys(obj)[0])
                            .map((strength, index) => (
                              <TextArea
                                key={index}
                                type="text"
                                placeholder={'Level Name...'}
                                value={strength}
                                onChange={(e) =>
                                  updateLevel(
                                    templateIndex,
                                    index,
                                    e.target.value
                                  )
                                }
                              />
                            ))}
                        </LevelPart>
                        <LevelDescPart>
                          {markingTemplatesRubric.performanceLevels
                            .map((obj) => Object.values(obj)[0])
                            .map((target, index) => (
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
                                  updateLevelDesc(
                                    templateIndex,
                                    index,
                                    e.target.value
                                  )
                                }
                              />
                            ))}
                        </LevelDescPart>
                        <TableRowButtoncont
                          onClick={() => addLevel(templateIndex)}
                        >
                          <TableRowButton>
                            <TableRowButtonIcon src={Plus} />
                            <TableRowText>Add Level</TableRowText>
                          </TableRowButton>
                        </TableRowButtoncont>
                      </LevelAndDescPart>
                    </TableBodyPart>
                  )
                )}
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

export default MarkingTemplateRubrics;
