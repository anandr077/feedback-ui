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
import { useClasses, useClassSettingById } from '../state/hooks';
import CheckboxBordered from '../CheckboxBordered';
import Loader from '../Loader';
import ToggleSwitchWithOneOption from '../../components2/ToggleSwitchWithOneOption';
import { updateClassSettingForClass } from '../../service';

function JeddAI() {
  const [isShowMenu, setShowMenu] = useState(false);
  const tabletView = isTabletView();
  const [toggleStates, setToggleStates] = useState({});
  const [titleVisibility, setTitleVisibility] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { data: classesData, isLoadingdata: isLoadingClassesData } =
    useClasses();
  const {
    data: classSettingData,
    isLoadingdata: isLoadingClassSettingData,
    resetData,
  } = useClassSettingById(classesData, true, 'id');


  useEffect(() => {
    if (!isLoadingClassSettingData) {
      const initialTitleVisibility = {};

      classesData.forEach((clazz) => {
        initialTitleVisibility[clazz.id] = true;
      });

      setTitleVisibility(initialTitleVisibility);
      setIsLoading(false);
    }
  }, [isLoadingClassSettingData]);

  const handleToggleChange = (classId, toggleType) => (event) => {
    const { checked } = event.target;
    let { jeddAIEnabled, rubricEnabled } =
      classSettingData[Number(classId) - 1];
    let updatedClassSetting = {};
    if (toggleType === 'jeddAIEnabled') {
      updatedClassSetting = {
        id: classId,
        jeddAIEnabled: checked,
        rubricEnabled: checked,
      };
    } else {
      updatedClassSetting = {
        id: classId,
        jeddAIEnabled: jeddAIEnabled,
        rubricEnabled: checked,
      };
    }

    updateClassSettingForClass(classId, updatedClassSetting).then((res) => {
      resetData();
    });
  };

  const toggleSection = (classId) => () => {
    setTitleVisibility((prevState) => ({
      ...prevState,
      [classId]: !prevState[classId],
    }));
  };

  if (isLoading) {
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
                    <RubricsContainer
                      isActive={
                        classSettingData[Number(clazz.id) - 1]?.jeddAIEnabled
                      }
                      isEnabled={true}
                    >
                      <Title>Enable JeddAI</Title>
                      <ToggleSwitchWithOneOption
                        onChecked={
                          classSettingData[Number(clazz.id) - 1]?.jeddAIEnabled
                        }
                        onChangeFn={handleToggleChange(
                          clazz.id,
                          'jeddAIEnabled'
                        )}
                      />
                    </RubricsContainer>
                    <RubricsContainer
                      isActive={
                        classSettingData[Number(clazz.id) - 1]?.rubricEnabled
                      }
                      isEnabled={
                        classSettingData[Number(clazz.id) - 1]?.jeddAIEnabled
                      }
                    >
                      <Title>Rubric marking for students</Title>
                      <ToggleSwitchWithOneOption
                        onChecked={
                          classSettingData[Number(clazz.id) - 1]?.rubricEnabled
                        }
                        onChangeFn={handleToggleChange(
                          clazz.id,
                          'rubricEnabled'
                        )}
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
