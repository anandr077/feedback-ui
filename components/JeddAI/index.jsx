import React, { useEffect, useState } from 'react';
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
import ToggleSwitchWithOneOption from '../../components2/ToggleSwitchWithOneOption';

function JeddAI() {
  const [isShowMenu, setShowMenu] = useState(false);
  const tabletView = isTabletView();
  const [toggleStates, setToggleStates] = useState({});
  const [titleVisibility, setTitleVisibility] = useState({});


  const {
    data: classesData,
    isLoadingdata: isLoadingClassesData
  } = useClasses();

  useEffect(() => {
    if (classesData) {
      const initialToggleStates = {};
      const initialTitleVisibility = {};

      classesData.forEach((clazz) => {
        initialToggleStates[clazz.id] = {
          jeddAI: true,
          rubric: true,
        };
        initialTitleVisibility[clazz.id] = true; 
      });

      setToggleStates(initialToggleStates);
      setTitleVisibility(initialTitleVisibility);
    }

  }, [classesData]);

  const handleToggleChange = (classId, toggleType) => (event) => {
    const { checked } = event.target;
    setToggleStates((prevState) => ({
      ...prevState,
      [classId]: {
        ...prevState[classId],
        [toggleType]: checked,
      },
    }));
  };

  const toggleSection = (classId) => () => {
    setTitleVisibility((prevState) => ({
      ...prevState,
      [classId]: !prevState[classId],
    }));
  };


  if (isLoadingClassesData) {
    return (
      <>
        <Loader />
      </>
    );
  }


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
          {classesData?.map((clazz) => (
            <React.Fragment key={clazz.id}>
              <TitleContainer>
                <TitleAndArrow onClick={toggleSection(clazz.id)}>
                  <ToggleArrow
                    src={toggledown}
                    checked={titleVisibility[clazz.id]}
                    
                  />
                  <Title>{clazz.title}</Title>
                </TitleAndArrow>
              </TitleContainer>
              {titleVisibility[clazz.id] && (
                <TitleContainerBody>
                  <RubricsContainer isActive={toggleStates[clazz.id]?.jeddAI}>
                    <Title>Enable JeddAI</Title>
                    <ToggleSwitchWithOneOption
                      onChecked={toggleStates[clazz.id]?.jeddAI}
                      onChangeFn={handleToggleChange(clazz.id, 'jeddAI')}
                    />
                  </RubricsContainer>
                  <RubricsContainer isActive={toggleStates[clazz.id]?.rubric}>
                    <Title>Rubric marking for students</Title>
                    <ToggleSwitchWithOneOption
                      onChecked={toggleStates[clazz.id]?.rubric}
                      onChangeFn={handleToggleChange(clazz.id, 'rubric')}
                    />
                  </RubricsContainer>
                </TitleContainerBody>
              )}
            </React.Fragment>
          ))}
          </RightContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
}

export default JeddAI;
