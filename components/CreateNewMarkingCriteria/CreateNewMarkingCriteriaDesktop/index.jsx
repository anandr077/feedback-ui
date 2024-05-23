import React, { useState } from 'react';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import GoBack from '../GoBack';
import Frame1372 from '../Frame1372';
import Frame1281 from '../Frame1281';
import Buttons2 from '../Buttons2';
import './CreateNewMarkingCriteriaDesktop.css';
import {
  TextInput,
  TitleContainer,
  Frame1379,
  Frame1376,
  Frame1315,
  Frame1302,
  Line15,
  EditIcon,
} from './style';
import Eye from '../../../static/icons/Eye.svg';
import Plus from '../../../static/icons/Plus.svg';
import pluswhite from '../../../static/icons/pluswhite.svg';
import MarkEdit from '../../../static/img/markEdit.svg';
import {
  AddNewCriteria,
  AddNewCriteriaButton,
  ButtonsContainer,
  CriteriaPart,
  Heading,
  HeadingContainer,
  InnerContainer,
  MainContainer,
  PreviewButton,
  PreviewButtonIcon,
  PreviewButtonText,
  RightContainer,
  SaveButton,
  SaveButtonText,
  TableBodyParts,
  TableContainer,
  TableHeading,
  TableRowButton,
  TableRowButtonIcon,
  TableRowText,
  TextArea,
} from './style';
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
import SecondSidebar from '../../SecondSidebar';
import PreviewDialog from '../../Shared/Dialogs/preview/previewCard';

function CreateNewMarkingCriteriaDesktop(props) {
  const {
    criterias,
    addCriteria,
    addLevel,
    deleteLevel,
    deleteCriteria,
    updateCriteriaTitle,
    updateLevelName,
    updateLevelDescription,
    saveMarkingCriteria,
    handleTitleChange,
    deleteMarkingCriteriaMethod,
    isUpdating,
    markingCriterias,
    markingCriteriaId,
  } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
    useState(false);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };
  const handleOnBlur = () => {
    setIsEditing(false);
  };

  const handleKeyPressInput = (e, maxLines, text) => {
    const lines = text.split('\n');
    if (e.key === 'Enter' && lines.length >= maxLines) {
      e.preventDefault();
    }
  };

  return (
    <>
      {/* <div className="account-settings-marking-criteria-create-new-desktop screen">
        <Frame1379>
          <Frame1376>
            <Frame1315>
              <Breadcrumb text="Account Settings" link={'/#/settings'} />
              <Breadcrumb2 title="Marking Criteria" link={'/#/settings'} />
              <Breadcrumb2 title={isUpdating ? 'Update' : 'Create new'} />
            </Frame1315>
            <GoBack />
          </Frame1376>
          <Frame1376>
            <Frame1372
              saveMethod={saveMarkingCriteria}
              deleteMethod={deleteMarkingCriteriaMethod}
              isUpdating={isUpdating}
            />

            <TitleContainer id="markingCriteriaTitleContainer">
              <TextInput
                placeholder="Name of marking template (max 140 characters)"
                id="markingCriteriaName"
                value={markingCriterias.title}
                onChange={handleTitleChange}
                maxLength="140"
              ></TextInput>
            </TitleContainer>
            <Frame1302>
              <Frame1281 />
              <Line15 src="/img/line-14@2x.png" alt="Line 15" />
              {criterias}
              <Buttons2 text="Add criteria" onClickFn={addCriteria} />
            </Frame1302>
            <Frame1372
              saveMethod={saveMarkingCriteria}
              deleteMethod={deleteMarkingCriteriaMethod}
              isUpdating={isUpdating}
              withoutTitle={true}
            />
          </Frame1376>
        </Frame1379>
      </div> */}
      <MainContainer>
        <InnerContainer>
          <SecondSidebar id={markingCriteriaId} />
          <RightContainer>
            <HeadingContainer>
              {isEditing ? (
                <Heading
                  id="markingCriteriaTitleContainer"
                  style={{ width: '75%' }}
                >
                  <TextInput
                    placeholder="Name of marking template"
                    id="markingCriteriaName"
                    value={markingCriterias.title}
                    onChange={handleTitleChange}
                    onBlur={() => handleOnBlur()}
                    onKeyPress={handleKeyPress}
                    maxLength="100"
                  ></TextInput>
                </Heading>
              ) : (
                <Heading>
                  {markingCriterias.title}
                  <EditIcon src={MarkEdit} onClick={() => setIsEditing(true)} />
                </Heading>
              )}
              <ButtonsContainer>
                <PreviewButton
                  onClick={() => setMarkingCriteriaPreviewDialog(true)}
                >
                  <PreviewButtonIcon src={Eye} />
                  <PreviewButtonText>Preview</PreviewButtonText>
                </PreviewButton>
                <SaveButton onClick={saveMarkingCriteria}>
                  <SaveButtonText>
                    {isUpdating ? 'Update Template' : 'Save Template'}
                  </SaveButtonText>
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
                {markingCriterias.criterias.map(
                  (markingTemplatesRubric, templateIndex) => (
                    <TableBodyPart key={templateIndex}>
                      <CriteriaPart>
                        <TextArea
                          type="text"
                          placeholder="Answering the question"
                          value={markingTemplatesRubric.title}
                          onChange={(e) =>
                            updateCriteriaTitle(templateIndex, e.target.value)
                          }
                          maxLength="140"
                          rows="1"
                          id="criteriaName"
                          onKeyPress={(e) =>
                            handleKeyPressInput(
                              e,
                              1,
                              markingTemplatesRubric.title
                            )
                          }
                        />
                      </CriteriaPart>
                      <div>
                        {markingTemplatesRubric.levels.map((level, index) => (
                          <LevelAndDescPart key={level.id}>
                            <LevelPart>
                              <TextArea
                                type="text"
                                placeholder="Level name"
                                value={level.name}
                                onChange={(e) =>
                                  updateLevelName(
                                    templateIndex,
                                    index,
                                    e.target.value
                                  )
                                }
                                maxLength="30"
                                rows="1"
                                onKeyPress={(e) =>
                                  handleKeyPressInput(e, 1, level.name)
                                }
                              />
                            </LevelPart>
                            <LevelDescPart>
                              <TextArea
                                type="text"
                                placeholder="An answer of this level should..."
                                value={level.description}
                                onChange={(e) =>
                                  updateLevelDescription(
                                    templateIndex,
                                    index,
                                    e.target.value
                                  )
                                }
                                maxLength="200"
                                rows="3"
                                onKeyPress={(e) =>
                                  handleKeyPressInput(e, 3, level.description)
                                }
                              />
                            </LevelDescPart>
                          </LevelAndDescPart>
                        ))}
                        <TableRowButtoncont
                          onClick={() => addLevel(templateIndex)}
                        >
                          <TableRowButton>
                            <TableRowButtonIcon src={Plus} />
                            <TableRowText>Add Level</TableRowText>
                          </TableRowButton>
                        </TableRowButtoncont>
                      </div>
                    </TableBodyPart>
                  )
                )}
              </TableBodyParts>
            </TableContainer>
            <AddNewCriteria>
              <AddNewCriteriaButton onClick={addCriteria}>
                <TableRowButtonIcon src={pluswhite}></TableRowButtonIcon>
                <SaveButtonText>Add New Criteria</SaveButtonText>
              </AddNewCriteriaButton>
            </AddNewCriteria>
          </RightContainer>
        </InnerContainer>
      </MainContainer>
      {openMarkingCriteriaPreviewDialog && (
        <PreviewDialog
          setMarkingCriteriaPreviewDialog={setMarkingCriteriaPreviewDialog}
          markingCriterias={{ ...markingCriterias, type: 'RUBRICS' }}
        />
      )}
    </>
  );
}
export default CreateNewMarkingCriteriaDesktop;
