import React, { useEffect, useRef } from 'react';
import './style.css';
import { useState } from 'react';
import {
  createNewMarkingCriteria,
  deleteMarkingCriteria,
  getMarkingMethodology,
  updateMarkingCriteria,
} from '../../../service';
import Loader from '../../Loader';

import React, { useState } from 'react';
import {
  AddNewCriteria,
  AddNewCriteriaButton,
  ButtonsContainer,
  CriteriaPart,
  EditIcon,
  EditIconHover,
  Heading,
  HeadingAndFilterContainer,
  HeadingContainer,
  InnerContainer,
  LeftContainer,
  MainContainer,
  MinusContainer,
  MinusImg,
  OptionContainer,
  OptionIcon,
  OptionText,
  OptionsContainer,
  PlusContainer,
  PlusImg,
  PlusMinusContainer,
  PreviewButton,
  PreviewButtonIcon,
  PreviewButtonText,
  RightContainer,
  SaveButton,
  SaveButtonText,
  Strength,
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
  TextInput,
} from './style';

import Eye from '../../../static/icons/Eye.svg';
import Plus from '../../../static/icons/Plus.svg';
import pluswhite from '../../../static/icons/pluswhite.svg';
import grayEdit from '../../../static/icons/edit_gray.svg';
import EditHover from '../../../static/img/EditHover.svg';
import { isTabletView } from '../../ReactiveRender';
import PreviewDialog from '../../Shared/Dialogs/preview/previewCard';
import MinusCircle from '../../../static/img/MinusCircle.svg';
import { toast } from 'react-toastify';
import Toast from '../../Toast';
import MenuButton from '../../MenuButton';
import ImprovedSecondarySideBar from '../../ImprovedSecondarySideBar';
import Header from '../../Header2';
import { useMarkingCriterias } from '../../state/hooks';
import { useHistory, useParams } from 'react-router-dom';
import { validateStrengthsTargets } from '../../../components2/markingCriteria';
import useNavigationBlock from '../../../hooks/useNavigationBlock';
import GeneralPopup from '../../GeneralPopup';

const STRENGTHS = 'strengths';
const TARGETS = 'targets';
const Strengths_And_Traget_Data = {
  title: '',
  strengths: [''],
  targets: [''],
};

export default function CreateNewStrengthAndTargets() {
  const { markingMethodologyId } = useParams();
  const [markingMethodology, setMarkingMethodology] = useState({
    title: 'New Marking Template',
    type: 'STRENGTHS_TARGETS',
    strengthsTargetsCriterias: [{ ...Strengths_And_Traget_Data }],
  });

  const [isLoading, setIsLoading] = React.useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [isShowMenu, setShowMenu] = React.useState(false);
  const {setIsNavigationBlocked, isShowNavigationBlockPopup, confirmNavigationChange, cancelNavigationPopup } = useNavigationBlock();
  const tabletView = isTabletView();
  const history = useHistory();
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
    useState(false);

  const {
    data: markingCriterias,
    isLoadingdata: isLoadingMarkingCriterias,
    setData: setMarkingCriterias,
    resetData: resetMarkingCriterias,
  } = useMarkingCriterias();

  React.useEffect(() => {
    console.log('markingCriteriaId', markingMethodologyId);
    if (markingMethodologyId === 'new') {
      setIsLoading(false);
    }
    if (markingCriterias) {
      const loadedMarkingCriteria = markingCriterias.filter(
        (criteria) => criteria.id === markingMethodologyId
      );
      if (loadedMarkingCriteria.length > 0) {
        setMarkingMethodology(loadedMarkingCriteria[0]);
        setIsLoading(false);
      }
    }
  }, [markingCriterias]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const handleCriteriaChange = (e, index) => {
    setIsNavigationBlocked(true);
    const updatedData = { ...markingMethodology };
    updatedData.strengthsTargetsCriterias[index].title = e.target.value;
    setMarkingMethodology(updatedData);
  };

  const handleTitleChange = (e) => {
    setIsNavigationBlocked(true);
    const updatedData = { ...markingMethodology };
    updatedData.title = e.target.value;
    setMarkingMethodology(updatedData);
  };

  const handleAddCriteria = () => {
    setMarkingMethodology((oldMarkingTemplate) => {
      const newMarkingTemplate = {
        ...oldMarkingTemplate,
        strengthsTargetsCriterias: [
          ...oldMarkingTemplate.strengthsTargetsCriterias,
          {
            title: '',
            strengths: [''],
            targets: [''],
          },
        ],
      };
      return newMarkingTemplate;
    });
  };

  const handleAddOption = (index, type) => {
    const updatedData = { ...markingMethodology };

    if (type === STRENGTHS) {
      updatedData.strengthsTargetsCriterias[index].strengths.push('');
    }
    if (type === TARGETS) {
      updatedData.strengthsTargetsCriterias[index].targets.push('');
    }
    setMarkingMethodology(updatedData);
  };
  const handleAddOptionInBetween = (childIndex, index, type) => {
    const updatedData = { ...markingMethodology };

    if (type === STRENGTHS) {
      const strengths = [
        ...updatedData.strengthsTargetsCriterias[index].strengths,
      ];
      strengths.splice(childIndex + 1, 0, '');
      updatedData.strengthsTargetsCriterias[index].strengths = strengths;
    }

    if (type === TARGETS) {
      const targets = [...updatedData.strengthsTargetsCriterias[index].targets];
      targets.splice(childIndex + 1, 0, '');
      updatedData.strengthsTargetsCriterias[index].targets = targets;
    }

    setMarkingMethodology(updatedData);
  };

  const removeAddOption = (childIndex, index, type) => {
   
    const updatedData = { ...markingMethodology };
    const criteria = updatedData.strengthsTargetsCriterias[index];
    if (type === STRENGTHS) {
      criteria.strengths.splice(childIndex, 1);
    } else if (type === TARGETS) {
      criteria.targets.splice(childIndex, 1);
    }
    if (criteria.strengths.length === 0 && criteria.targets.length === 0) {
      updatedData.strengthsTargetsCriterias.splice(index, 1);
    }
    setMarkingMethodology(updatedData);
  };

  const handleCriteriaOptionChange = (e, childIndex, index, type) => {
    const updatedData = { ...markingMethodology };
    if (type === STRENGTHS) {
      updatedData.strengthsTargetsCriterias[index].strengths[childIndex] =
        e.target.value;
    }
    if (type === TARGETS) {
      updatedData.strengthsTargetsCriterias[index].targets[childIndex] =
        e.target.value;
    }
    setMarkingMethodology(updatedData);
  };

  const saveData = () => {
    if (!validateStrengthsTargets(markingMethodology)) {
      return;
    }
    setIsNavigationBlocked(false);
    if (markingMethodologyId === 'new') {
      createNewMarkingCriteria(markingMethodology).then((response) => {
        resetMarkingCriterias();
        toast(
          <Toast
            message={'Strengths and targets created'}
            link={
              '/markingTemplates/strengths-and-targets/' + response.id.value
            }
          />
        );

        history.push(`/markingTemplates/strengths-and-targets/:${response.id.value}`);
      });
    } else {
      updateMarkingCriteria(markingMethodology, markingMethodologyId).then(
        (response) => {
          toast(
            <Toast
              message={'Strengths and Targets Updated'}
              link={
                '/markingTemplates/strengths-and-targets/' + response.id.value
              }
            />
          );

          const updatedMarkingCriterias = markingCriterias.map(
            (markingCriteria, index) => {
              if (markingCriteria.id === markingMethodologyId) {
                return {
                  ...markingCriteria,
                  ...markingMethodology,
                };
              }
              return markingCriteria;
            }
          );
          setMarkingCriterias(updatedMarkingCriterias);
          history.push(`/markingTemplates/strengths-and-targets/:${response.id.value}`);
        }
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIsEditing(false);
    }
  };
  const handleOnBlur = () => {
    setIsEditing(false);
  };

  const handleKeyPressInput = (e, maxLines, text) => {
    setIsNavigationBlocked(true);
    const lines = text.split('\n');
    if (e.key === 'Enter' && lines.length >= maxLines) {
      e.preventDefault();
    }
  };

  return (
    <>
      {isShowNavigationBlockPopup && (
        <GeneralPopup
          hidePopup={cancelNavigationPopup}
          title="Save The Template"
          textContent="Do you want to leave without saving?"
          buttonText="Yes"
          confirmButtonAction={confirmNavigationChange}
          closeBtnText="No"
          cancelPopup={cancelNavigationPopup}
        />
      )}
      <Header breadcrumbs={[markingMethodology?.title]} />
      <MainContainer>
        <ImprovedSecondarySideBar
          isShowMenu={isShowMenu}
          setShowMenu={setShowMenu}
          id={markingMethodologyId}
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
                <Heading>
                  <TextInput
                    placeholder="Name a marking template"
                    value={markingMethodology?.title}
                    onChange={handleTitleChange}
                    onBlur={() => handleOnBlur()}
                    onKeyPress={handleKeyPress}
                    maxLength="100"
                  ></TextInput>
                </Heading>
              ) : (
                <Heading onClick={() => setIsEditing(true)}>
                  {markingMethodology?.title}
                  <EditIcon src={grayEdit} />
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
                <SaveButton onClick={() => saveData()}>
                  <SaveButtonText>
                    {markingMethodologyId === 'new'
                      ? 'Save Template'
                      : 'Update Template'}
                  </SaveButtonText>
                </SaveButton>
              </ButtonsContainer>
            </HeadingContainer>
            <TableContainer>
              <TableHeadingPart>
                <TableHeading>Criteria</TableHeading>
                <TableHeading>Strengths</TableHeading>
                <TableHeading>Targets</TableHeading>
              </TableHeadingPart>
              <TableBodyParts>
                {markingMethodology.strengthsTargetsCriterias.map(
                  (markingtemplate, templateIndex) => (
                    <TableBodyPart key={templateIndex}>
                      <CriteriaPart>
                        <TextArea
                          type="text"
                          placeholder="Enter an evaluation area for this set of strengths and targets"
                          value={markingtemplate.title}
                          onChange={(e) =>
                            handleCriteriaChange(e, templateIndex)
                          }
                          rows="1"
                          onKeyPress={(e) =>
                            handleKeyPressInput(e, 1, markingtemplate.title)
                          }
                        />
                      </CriteriaPart>
                      <StrengthPart>
                        {markingtemplate.strengths.map((strength, index) => (
                          <Strength>
                            <TextArea
                              key={index}
                              type="text"
                              placeholder="You have effectively..."
                              value={strength}
                              rows="5"
                              onChange={(e) =>
                                handleCriteriaOptionChange(
                                  e,
                                  index,
                                  templateIndex,
                                  STRENGTHS
                                )
                              }
                              onKeyPress={(e) =>
                                handleKeyPressInput(e, 5, strength)
                              }
                            />
                            <PlusMinusContainer>
                              <PlusContainer
                                onClick={() =>
                                  handleAddOptionInBetween(
                                    index,
                                    templateIndex,
                                    STRENGTHS
                                  )
                                }
                              >
                                <PlusImg src={Plus} />
                              </PlusContainer>
                              <MinusContainer
                                onClick={() =>
                                  removeAddOption(
                                    index,
                                    templateIndex,
                                    STRENGTHS
                                  )
                                }
                              >
                                <MinusImg src={MinusCircle} />
                              </MinusContainer>
                            </PlusMinusContainer>
                          </Strength>
                        ))}
                        <TableRowButtoncont
                          onClick={() =>
                            handleAddOption(templateIndex, STRENGTHS)
                          }
                        >
                          <TableRowButton>
                            <TableRowButtonIcon src={Plus} />
                            <TableRowText>New Strength</TableRowText>
                          </TableRowButton>
                        </TableRowButtoncont>
                      </StrengthPart>
                      <TargetPart>
                        {markingtemplate.targets.map((target, index) => (
                          <Strength>
                            <TextArea
                              key={index}
                              type="text"
                              placeholder="You need to..."
                              value={target}
                              rows="5"
                              onChange={(e) =>
                                handleCriteriaOptionChange(
                                  e,
                                  index,
                                  templateIndex,
                                  TARGETS
                                )
                              }
                              onKeyPress={(e) =>
                                handleKeyPressInput(e, 5, target)
                              }
                            />
                            <PlusMinusContainer>
                              <PlusContainer
                                onClick={() =>
                                  handleAddOptionInBetween(
                                    index,
                                    templateIndex,
                                    TARGETS
                                  )
                                }
                              >
                                <PlusImg src={Plus} />
                              </PlusContainer>
                              <MinusContainer
                                onClick={() =>
                                  removeAddOption(index, templateIndex, TARGETS)
                                }
                              >
                                <MinusImg src={MinusCircle} />
                              </MinusContainer>
                            </PlusMinusContainer>
                          </Strength>
                        ))}
                        <TableRowButtoncont
                          onClick={() =>
                            handleAddOption(templateIndex, TARGETS)
                          }
                        >
                          <TableRowButton>
                            <TableRowButtonIcon src={Plus} />
                            <TableRowText>New Target</TableRowText>
                          </TableRowButton>
                        </TableRowButtoncont>
                      </TargetPart>
                    </TableBodyPart>
                  )
                )}
              </TableBodyParts>
            </TableContainer>
            <AddNewCriteria>
              <AddNewCriteriaButton onClick={() => handleAddCriteria()}>
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
          markingCriterias={{
            ...markingMethodology,
            type: 'STRENGTHS_TARGETS',
          }}
        />
      )}
    </>
  );
}



