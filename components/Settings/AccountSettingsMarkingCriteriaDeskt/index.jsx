import React, { useEffect, useRef } from 'react';
import Buttons from '../Buttons';
import {
  MarkingCriteriaList,
  Frame1302,
  MainContainer,
  InnerContainer,
  RightContainer,
  CreateButtonCont,
  PlusIcon,
  PlusText,
  PopUpContainer,
  PopUpCardImg,
  PopUpCard,
  PopUpCardText,
  PlusIconHover,
  HeadingAndFilterContainer,
} from './style';
import PlusViolet from '../../../static/img/Plus-violet.svg';
import AddNewHover from '../../../static/img/AddNewHover.svg';
import Rubricsnew from '../../../static/img/Rubricsnew.svg';
import Strengthsnew from '../../../static/img/Strengthsnew.svg';
import { useHistory } from 'react-router-dom';
import ImprovedSecondarySideBar from '../../ImprovedSecondarySideBar';
import MenuButton from '../../MenuButton';
import { isTabletView } from '../../ReactiveRender';

function AccountSettingsMarkingCriteriaDeskt({ markingCriteriaList }) {
  const [openMarkingMethodologyDialog, setOpenMarkingMethodologyDialog] =
    React.useState(false);
  const [isShowMenu, setShowMenu] = React.useState(false);
  const tabletView = isTabletView();
  const divRef = useRef(null);
  const history = useHistory();

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setOpenMarkingMethodologyDialog(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
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
          <Frame1302>
            <CreateButtonCont
              onClick={() => setOpenMarkingMethodologyDialog(true)}
              selected={openMarkingMethodologyDialog}
            >
              <PlusIcon src={PlusViolet} />
              <PlusIconHover src={AddNewHover} />
              <PlusText>New Marking Template</PlusText>
              {openMarkingMethodologyDialog && (
                <PopUpContainer ref={divRef}>
                  <PopUpCard
                    onClick={() =>
                      history.push('/markingTemplates/rubrics/new')
                    }
                    style={{ borderBottom: '1px solid  #C9C6CC80' }}
                  >
                    <PopUpCardImg src={Rubricsnew} />
                    <PopUpCardText>Rubric</PopUpCardText>
                  </PopUpCard>
                  <PopUpCard
                    onClick={() =>
                      history.push(
                        '/markingTemplates/strengths-and-targets/new'
                      )
                    }
                  >
                    <PopUpCardImg src={Strengthsnew} />
                    <PopUpCardText>Strengths and Targets</PopUpCardText>
                  </PopUpCard>
                </PopUpContainer>
              )}
            </CreateButtonCont>

            <MarkingCriteriaList>{markingCriteriaList}</MarkingCriteriaList>
          </Frame1302>
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  );
}

export default AccountSettingsMarkingCriteriaDeskt;
