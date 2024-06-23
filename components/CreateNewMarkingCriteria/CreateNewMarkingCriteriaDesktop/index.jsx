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
  EditIconHover,
  PlusMinusContainer,
  PlusImg,
  MinusImg,
  PlusContainer,
  MinusContainer,
  HeadingAndFilterContainer,
} from './style';
import Eye from '../../../static/icons/Eye.svg';
import Plus from '../../../static/icons/Plus.svg';
import pluswhite from '../../../static/icons/pluswhite.svg';
import MarkEdit from '../../../static/img/markEdit.svg';
import EditHover from '../../../static/img/EditHover.svg';
import MinusCircle from '../../../static/img/MinusCircle.svg';
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
import { isTabletView } from '../../ReactiveRender';
import MenuButton from '../../MenuButton';
import ImprovedSecondarySideBar from '../../ImprovedSecondarySideBar';

function CreateNewMarkingCriteriaDesktop(props) {
  const {
    criterias,
    addCriteria,
    addLevel,
    deleteLevel,
    addLevelInBetween,
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
  const [isShowMenu, setShowMenu] = React.useState(false);
  const tabletView = isTabletView();

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
      <MainContainer>
        <ImprovedSecondarySideBar
          isShowMenu={isShowMenu}
          setShowMenu={setShowMenu}
          id={markingCriteriaId}
        />
        <InnerContainer>
          {tabletView && (
            <HeadingAndFilterContainer>
              <MenuButton setShowMenu={setShowMenu} />
            </HeadingAndFilterContainer>
          )}
          <RightContainer>
            <HeadingContainer>
              {isEditing ? (
                <Heading id="markingCriteriaTitleContainer">
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
                <Heading onClick={() => setIsEditing(true)}>
                  {markingCriterias.title}
                  <EditIcon src={MarkEdit} />
                  <EditIconHover src={EditHover} />
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
                              <PlusMinusContainer>
                                <PlusContainer
                                  onClick={() =>
                                    addLevelInBetween(templateIndex, index)
                                  }
                                >
                                  <PlusImg src={Plus} />
                                </PlusContainer>
                                <MinusContainer
                                  onClick={() =>
                                    deleteLevel(templateIndex, index)
                                  }
                                >
                                  <MinusImg src={MinusCircle} />
                                </MinusContainer>
                              </PlusMinusContainer>
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
