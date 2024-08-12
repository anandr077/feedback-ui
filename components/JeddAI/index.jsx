import React, { useState } from 'react';
import {
  CheckboxContainer,
  CheckBoxText,
  ClassesCheckboxContainer,
  ClassesContainer,
  HeadingAndFilterContainer,
  InnerContainer,
  MainContainer,
  RightContainer,
  RubricsContainer,
  StyledExpandMoreIcon,
  StyledSwitch,
  Title,
  TitleAndArrow,
  TitleContainer,
  TitleContainerBody,
  ToggleArrow,
} from './style';
import toggledown from '../../static/img/toggledown.svg';

import ImprovedSecondarySideBar from '../ImprovedSecondarySideBar';
import MenuButton from '../MenuButton';
import { isTabletView } from '../ReactiveRender';
import { useClasses } from '../state/hooks';
import CheckboxBordered from '../CheckboxBordered';
import Loader from '../Loader';

function JeddAI() {
  const [isShowMenu, setShowMenu] = useState(false);
  const tabletView = isTabletView();
  const [jeddAIChecked, setJeddAIChecked] = useState(true);
  const [rubricChecked, setRubricChecked] = useState(true);
  const [showTitleBody, setShowTitleBody] = useState(true);
  const [checkedClasses, setCheckedClasses] = useState({});

  const handleJeddAIChange = (event) => {
    setJeddAIChecked(event.target.checked);
    setRubricChecked(event.target.checked);
  };
  const handleRubricChange = (event) => {
    setRubricChecked(event.target.checked);
  };
  const toggleSction = (event) => {
    setShowTitleBody(!showTitleBody);
  };

  const {
    data: classesData,
    isLoadingdata: isLoadingClassesData,
    setData: setClassesData,
    resetData: resetClassesData,
  } = useClasses();

  if (isLoadingClassesData) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const handleClassCheckboxChange = (classId, isChecked) => {
    setCheckedClasses((prevCheckedClasses) => ({
      ...prevCheckedClasses,
      [classId]: isChecked,
    }));
  };

  const checkboxes = classesData?.map((clazz) => {
    return (
      <CheckboxContainer>
        <CheckboxBordered
          key={clazz.id}
          id={clazz.id}
          checked={!!checkedClasses[clazz.id]}
          onChange={(e) =>
            handleClassCheckboxChange(clazz.id, e.target.checked)
          }
        />
        <CheckBoxText>{clazz.title}</CheckBoxText>
      </CheckboxContainer>
    );
  });

  return (
    <>
      <MainContainer>
        <ImprovedSecondarySideBar
          isShowMenu={isShowMenu}
          setShowMenu={setShowMenu}
        />
        <InnerContainer>
          {tabletView && (
            <HeadingAndFilterContainer>
              <MenuButton setShowMenu={setShowMenu} />
            </HeadingAndFilterContainer>
          )}
          <RightContainer>
            <TitleContainer>
              <TitleAndArrow>
                <ToggleArrow
                  src={toggledown}
                  checked={showTitleBody}
                  onClick={toggleSction}
                />
                <Title>JeddAI</Title>
              </TitleAndArrow>
              <StyledSwitch
                checked={jeddAIChecked}
                onChange={handleJeddAIChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </TitleContainer>
            {showTitleBody && (
              <TitleContainerBody isActive={jeddAIChecked}>
                <RubricsContainer>
                  <Title>Rubric marking for students</Title>
                  <StyledSwitch
                    checked={rubricChecked}
                    onChange={handleRubricChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </RubricsContainer>
                <ClassesContainer>
                  <Title>Enable JeddAI for classes</Title>
                  <ClassesCheckboxContainer>
                    {checkboxes}
                  </ClassesCheckboxContainer>
                </ClassesContainer>
              </TitleContainerBody>
            )}
          </RightContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
}

export default JeddAI;
