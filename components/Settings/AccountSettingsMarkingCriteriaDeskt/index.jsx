import React, { useEffect, useRef, useState } from 'react';
import Buttons from '../Buttons';
import {
  MarkingCriteriaList,
  Frame1302,
  MainContainer,
  InnerContainer,
  RightContainer,
  RightSideHeader,
  CreateButtonContainer,
  ImportFileLabel,
  CardImgCont,
  CardImg,
  CardTitle,
  ImportFile,
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
import DownlaodIcon from '../../../static/img/Download.svg';
import AddNewHover from '../../../static/img/AddNewHover.svg';
import Rubricsnew from '../../../static/img/Rubricsnew.svg';
import Strengthsnew from '../../../static/img/Strengthsnew.svg';
import { useHistory } from 'react-router-dom';
import ImprovedSecondarySideBar from '../../ImprovedSecondarySideBar';
import MenuButton from '../../MenuButton';
import { isTabletView } from '../../ReactiveRender';
import PreviewDialog from '../../Shared/Dialogs/preview/previewCard';
import { importJsonFile, validateRubric, validateStrengthsTargets } from '../../../components2/markingCriteria';
import { createNewMarkingCriteria } from '../../../service';
import { toast } from 'react-toastify';
import Toast from '../../Toast';

function AccountSettingsMarkingCriteriaDeskt({ markingCriteriaList, resetMarkingCriterias }) {
  const [openMarkingMethodologyDialog, setOpenMarkingMethodologyDialog] = useState(false);
  const [isShowMenu, setShowMenu] = useState(false);
  const [isShowExportMarkingCriteriaPopup, setIsShowExportMarkingCriteriaPopup] = useState(false)
  const [importedMarkingCriteria, setImportedMarkingCriteria] = useState({})
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

  const handleMarkingCriteriaImport = async (event) => {
    try {
      const importedJsonFile = await importJsonFile(event);
      setImportedMarkingCriteria(importedJsonFile);
      setIsShowExportMarkingCriteriaPopup(true);
    } catch (err) {
      console.error('Error importing comment bank:', err);
    }
  };

  const handleCreateMarkingCriteria = (markingCriterias) =>{
    if(markingCriterias.type === 'STRENGTHS_TARGETS'){
      if (!validateStrengthsTargets(markingCriterias)) {
        toast(
          <Toast message={'Strengths and targets are not valid'}/>
        );
        return;
      }

      createNewMarkingCriteria(markingCriterias).then((response) => {
        resetMarkingCriterias();
        toast(
          <Toast message={'Strengths and targets created'}/>
        );
        history.push(`/markingTemplates/strengths-and-targets/${response.id.value}`)
      });
    }else{
      if(!validateRubric(markingCriterias)){
        toast(
          <Toast message={'Marking criterias are not valid'}/>
        );
        return;
      }
      createNewMarkingCriteria(markingCriterias).then((response) => {
        resetMarkingCriterias();
        toast(
          <Toast message={'New Marking Criteria created'} />
        );
        history.push(`/markingTemplates/rubrics/${response.id.value}`)
      })}
    setIsShowExportMarkingCriteriaPopup(false)
  }

  return (
    <MainContainer>
      {isShowExportMarkingCriteriaPopup && (
        <PreviewDialog
          setMarkingCriteriaPreviewDialog={setIsShowExportMarkingCriteriaPopup}
          markingCriterias={importedMarkingCriteria}
          showActionButton={true}
          onActionButtonClick={handleCreateMarkingCriteria}
        />
      )}
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
            <RightSideHeader>
              <CreateButtonContainer
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
              </CreateButtonContainer>
              <ImportFileLabel>
                <CardImgCont>
                  <CardImg src={DownlaodIcon} rotate={true} />
                </CardImgCont>
                <CardTitle>Import</CardTitle>
                <ImportFile
                  type="file"
                  onChange={handleMarkingCriteriaImport}
                />
              </ImportFileLabel>
            </RightSideHeader>

            <MarkingCriteriaList>{markingCriteriaList}</MarkingCriteriaList>
          </Frame1302>
        </RightContainer>
      </InnerContainer>
    </MainContainer>
  );
}

export default AccountSettingsMarkingCriteriaDeskt;
