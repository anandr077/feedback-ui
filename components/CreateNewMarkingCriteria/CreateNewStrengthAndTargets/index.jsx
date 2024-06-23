import React, { useEffect, useRef } from 'react';
import './style.css';
import Breadcrumb from '../../Breadcrumb';
import Breadcrumb2 from '../../Breadcrumb2';
import GoBack from '../GoBack';
import { useState } from 'react';
import {
  createNewMarkingCriteria,
  deleteMarkingCriteria,
  getMarkingMethodology,
  updateMarkingCriteria,
} from '../../../service';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
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
import SecondSidebar from '../../SecondSidebar';
import { isMobileView, isTabletView } from '../../ReactiveRender';
import PreviewDialog from '../../Shared/Dialogs/preview/previewCard';
import MinusCircle from '../../../static/img/MinusCircle.svg';
import { toast } from 'react-toastify';
import Toast from '../../Toast';
import MenuButton from '../../MenuButton';
import ImprovedSecondarySideBar from '../../ImprovedSecondarySideBar';

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
  const tabletView = isTabletView();
  const history = useHistory();
  const [openMarkingCriteriaPreviewDialog, setMarkingCriteriaPreviewDialog] =
    useState(false);

  useEffect(() => {
    Promise.all([getMarkingMethodologyForId(markingMethodologyId)]).then(
      ([result]) => {
        setMarkingMethodology(result[0]);
        setIsLoading(false);
      }
    );
  }, []);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const handleCriteriaChange = (e, index) => {
    const updatedData = { ...markingMethodology };
    updatedData.strengthsTargetsCriterias[index].title = e.target.value;
    setMarkingMethodology(updatedData);
  };

  const handleTitleChange = (e) => {
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

  const removeCriteria = (indexToDelete) => {
    const updatedData = { ...markingMethodology };
    updatedData.strengthsTargetsCriterias =
      markingMethodology.strengthsTargetsCriterias.filter(
        (_, index) => index !== indexToDelete
      );
    setMarkingMethodology(updatedData);
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
    if (type === STRENGTHS) {
      updatedData.strengthsTargetsCriterias[index].strengths.splice(
        childIndex,
        1
      );
    }
    if (type === TARGETS) {
      updatedData.strengthsTargetsCriterias[index].targets.splice(
        childIndex,
        1
      );
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

  const createStrengthsAndTargets = (criteria, index) => {
    return (
      <div className="strength-and-target-container">
        <div className="strength">
          <div className="strength-text">Strengths</div>
          {criteria.strengths.map((value, childIndex) => {
            return (
              <div className="criteria-option">
                {input(
                  value,
                  handleCriteriaOptionChange,
                  childIndex,
                  index,
                  STRENGTHS,
                  markingMethodology.title
                )}
                {childIndex >= 1 && (
                  <div
                    className="remove-option"
                    onClick={() =>
                      removeAddOption(childIndex, index, STRENGTHS)
                    }
                  >
                    <img src="/icons/delete-vector.svg" alt="delete" />
                    Remove
                  </div>
                )}
              </div>
            );
          })}

          <div
            className="add-criteria"
            onClick={() => handleAddOption(index, STRENGTHS)}
            style={{ width: 'fit-content' }}
          >
            + Add option
          </div>
        </div>
        <div className="target">
          <div className="target-text">Targets</div>
          {criteria.targets.map((value, childIndex) => {
            return (
              <div className="criteria-option">
                <input
                  type="text"
                  className="title-input"
                  placeholder="You need to..."
                  value={markingMethodology.title !== '' ? value : ''}
                  onChange={(e) =>
                    handleCriteriaOptionChange(e, childIndex, index, TARGETS)
                  }
                  style={{ fontWeight: 'bold' }}
                />
                {childIndex >= 1 && (
                  <div
                    className="remove-option"
                    onClick={() => removeAddOption(childIndex, index, TARGETS)}
                  >
                    <img src="/icons/delete-vector.svg" alt="delete" />
                    Remove
                  </div>
                )}
              </div>
            );
          })}
          <div
            className="add-criteria"
            onClick={() => handleAddOption(index, TARGETS)}
            style={{ width: 'fit-content' }}
          >
            + Add option
          </div>
        </div>
      </div>
    );
  };
  const createCriteria = (criteria, index) => {
    return (
      <>
        <div className="criteria-container">
          <div className="remove-and-criteria">
            <div className="criteria">Evaluation Area</div>
            <div className="remove" onClick={() => removeCriteria(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M2.5918 13.8327L13.2585 3.16602M13.2585 13.8327L2.5918 3.16602"
                  stroke="#8A1C1C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{' '}
              Remove
            </div>
          </div>
          <input
            type="text"
            className="title-input"
            placeholder="Enter an evaluation area for this set of strengths and targets"
            value={criteria?.title || ''}
            onChange={(e) => handleCriteriaChange(e, index)}
            style={{ marginTop: '20px' }}
          />
          {createStrengthsAndTargets(criteria, index)}
        </div>
      </>
    );
  };

  const createBreadcrumb = (markingMethodologyId) => {
    return (
      <div className="breadcrumb">
        <Breadcrumb text="Account Settings" link={'/#/settings'} />
        <Breadcrumb2 title="Marking Templates" link={'/#/settings'} />
        <Breadcrumb2
          title={markingMethodologyId === 'new' ? 'Create new' : 'Update'}
        />
      </div>
    );
  };

  const allCriteriaFrames = () => {
    return (
      <div className="form-container">
        <div className="subheading">Strengths and Targets</div>
        <div className="border"></div>
        {markingMethodology?.strengthsTargetsCriterias?.map((criteria, index) =>
          createCriteria(criteria, index)
        )}
        <div className="add-criteria" onClick={() => handleAddCriteria()}>
          + Add evaluation area
        </div>
      </div>
    );
  };

  function validateStrengthsTargets(strengthAndTargetdata) {
    if (!strengthAndTargetdata.title.trim()) {
      toast(<Toast message={'Please Enter Title for Marking Criteria'} />);
      return false;
    }
    for (const criteria of strengthAndTargetdata.strengthsTargetsCriterias) {
      if (!criteria.title.trim()) {
        toast(<Toast message={'Please Enter criteria title'} />);
        return false;
      }

      if (criteria.strengths.length < 1 || criteria.targets.length < 1) {
        toast(
          <Toast
            message={'You have to enter at least two option for each category'}
          />
        );
        return false;
      }

      if (
        criteria.strengths.some((strength) => !strength.trim()) ||
        criteria.targets.some((target) => !target.trim())
      ) {
        toast(
          <Toast message={'Strength or Target option field cannot be empty'} />
        );
        return false;
      }
    }
    return true;
  }

  const saveData = () => {
    if (!validateStrengthsTargets(markingMethodology)) {
      return;
    }
    if (markingMethodologyId === 'new') {
      createNewMarkingCriteria(markingMethodology).then((response) => {
        toast(
          <Toast
            message={'Strengths and Targets Created'}
            link={
              '/markingTemplates/strengths-and-targets/' + response.id.value
            }
          />
        );

        history.push('/settings');
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
          history.push('/settings');
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

const handleDelete = (id) => {
  deleteMarkingCriteria(id).then(() => {
    window.location.href = '/#/settings';
  });
};

const titleAndSaveButton = (saveData, markingMethodologyId = 'new') => {
  return (
    <div className="heading">
      <div className="heading-text">Create new marking template</div>
      <div className="delete-and-save">
        {markingMethodologyId != 'new' ? (
          <div
            className="delete"
            onClick={() => handleDelete(markingMethodologyId)}
          >
            <img src="/icons/trashcan.svg" alt="icon-trash" />
            <div>Delete</div>
          </div>
        ) : (
          ''
        )}
        <button className="save" onClick={() => saveData()}>
          {markingMethodologyId === 'new' ? 'Save criteria' : 'Update criteria'}
        </button>
      </div>
    </div>
  );
};

const inputTitle = (title, onChange) => {
  return (
    <input
      type="text"
      className="title-input"
      placeholder="Name a marking template"
      value={title}
      onChange={onChange}
    />
  );
};

function input(
  value,
  handleCriteriaOptionChange,
  childIndex,
  index,
  STRENGTHS,
  title
) {
  return (
    <input
      type="text"
      className="title-input"
      placeholder=" You have effectively..."
      value={title !== '' ? value : ''}
      onChange={(e) =>
        handleCriteriaOptionChange(e, childIndex, index, STRENGTHS)
      }
      style={{ fontWeight: 'bold' }}
    />
  );
}

const getMarkingMethodologyForId = async (id) => {
  if (id === 'new') {
    return [
      {
        title: 'New Marking Template',
        type: 'STRENGTHS_TARGETS',
        strengthsTargetsCriterias: [{ ...Strengths_And_Traget_Data }],
      },
    ];
  } else {
    return await getMarkingMethodology(id);
  }
};
