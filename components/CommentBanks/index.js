import React, { useEffect, useRef, useState } from 'react';
import {
  BankCommentTitle,
  ButtonConatiner,
  ButtonText,
  CardContainer,
  ImportFileLabel,
  ImportFile,
  Card,
  CardImg,
  CardImgCont,
  CardImgDoc,
  CardTitle,
  Commentsuggestion,
  CreateButton,
  EmptyBankContainer,
  EmptyBankContainerButton,
  EmptyBankHeading,
  EmptyBankIconCont,
  EmptyBankSubHeading,
  FeedbackBankHeading,
  Frame1302,
  HeadingAndFilterContainer,
  InnerContainer,
  MainContainer,
  MarkingCriteriaList,
  MoreOptionsContainer,
  PopupBackground,
  PopupContainer,
  PopupDialogContentBox,
  PopupDialogContentBoxLeft,
  PopupDialogContentBoxRight,
  PopupTitle,
  PopupTitleContainer,
  PopupTitleImg,
  PrevieImg,
  PreviewContainer,
  PreviewIconCont,
  Previewpara,
  RightContainer,
  StyledTab,
  StyledTabs,
  TabsContainer,
  TabsPlus,
  TabsPlusContainer,
  TabsPlusText,
  Title1,
} from './style';
import {
  createNewFeedbackBank,
  createNewMarkingCriteria,
  createNewSmartAnnotation,
  deleteSmartAnnotation,
  getFeedbackBanks,
  updateSmartAnnotation,
} from '../../service';
import Loader from '../Loader';
import EmptyBankIcon from '../../static/img/emptyBank.svg';
import Plus from '../../static/img/Plus.svg';
import Pluslight from '../../static/img/Pluslight.svg';
import TabTitleContainer from '../Settings/AccountSettingsMarkingCriteriaDeskt/TabTitleContainer';
import { getUserId } from '../../userLocalDetails';
import closecircle from '../../static/img/closecircle.svg';
import PlusBlue from '../../static/img/Plus-blue.svg';
import DownloadIcon from '../../static/img/Download.svg';
import Doc from '../../static/img/doc.svg';
import PreviewIcon from '../../static/img/preview.svg';
import FeedbackArea from './FeedbackArea';
import Toast from '../Toast';
import { toast } from 'react-toastify';
import { isTabletView } from '../ReactiveRender';
import ImprovedSecondarySideBar from '../ImprovedSecondarySideBar';
import MenuButton from '../MenuButton';
import { useCommentBanks } from '../state/hooks';
import CommentBankDialog from '../Shared/Dialogs/commentBank';
import { exportJsonFile } from '../../components2/exportJsonFile';
import { importJsonFile } from '../../components2/importJsonFile';

const CommentBanks = () => {
  const [smartAnnotations, setSmartAnnotations] = useState();
  const [systemSmartAnnotations, setSystemSmartAnnotations] = useState();
  const [selectedBank, setSelectedBank] = useState();
  const [feedbackBankId, setFeedbackBankId] = useState(0);
  const [isShowNewBankPopUp, setIsShowNewBankPopUp] = useState(false);
  const [feedbackBankCreated, setFeedbackBankCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [smartAnnotationeditIndex, setSmartAnnotationeditIndex] = useState(0);
  const [isShowMenu, setShowMenu] = useState(false);
  const [isShowImportCommentBankPopup, setIsShowImportCommentBankPopup] = useState(false);
  const [importedCommentBank, setImportedCommentBank] = useState({})
  const tabletView = isTabletView();
  const selectedRef = useRef(null);

const {
  data: feedbanksData,
  isLoadingdata,
  setData: setFeedbanksData,
  resetData,
} = useCommentBanks();

  useEffect(() => {
    if (feedbanksData) {
      const nonSystemBanks = feedbanksData?._embedded.commentbanks.filter(
        (bank) => !bank.isSystem
      ); 
      const systemBanks = feedbanksData?._embedded.commentbanks.filter(
        (bank) => bank.isSystem
      ); 
      setFeedbackBankId(
        feedbackBankCreated
          ? nonSystemBanks[nonSystemBanks.length - 1]?.id
          : nonSystemBanks[0]?.id
      );
      setSmartAnnotations(nonSystemBanks);
      setFeedbackBankId(
        feedbackBankCreated
          ? nonSystemBanks[nonSystemBanks.length - 1]?.id
          : nonSystemBanks[0]?.id
      );
      setSystemSmartAnnotations(systemBanks);
      setSelectedBank(systemBanks[0]);
      setIsLoading(false);
    }
  }, [feedbanksData]);

  const deteteFeedbackBank = (smartAnnotationIndex) => {
    const newSmartAnnotations = smartAnnotations.filter(
      (smartAnnotation) => smartAnnotation.id != smartAnnotationIndex
    );
    deleteSmartAnnotation(smartAnnotationIndex)
      .then(() => {
        if (newSmartAnnotations.length === 0) {
          setFeedbackBankId('');
        } else {
          setFeedbackBankId(newSmartAnnotations[0].id);
        }

        setFeedbanksData((old) => ({
          ...old,
          _embedded: {
            ...old._embedded,
            commentbanks: [...systemSmartAnnotations, ...newSmartAnnotations],
          },
        }));
        toast(<Toast message={'Feedback bank deleted'} />);
      })
      .catch(() => {
        toast(<Toast message={'Error deleting bank'} />);
      });
  };

  const createCloneFeedbankBank = (smartAnnotationIndex) => {
    const newClonedBank = smartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === smartAnnotationIndex
    );

    const { title, smartComments } = newClonedBank;
    const newObject = { title: `Copy of ${title}`, smartComments };

    createNewFeedbackBank(newObject)
      .then(() => {
        resetData();
        toast(<Toast message={'feedback bank cloned'} />);
        setFeedbackBankCreated(true);
      })
      .catch((error) => {
        toast(<Toast message={'Cloning failed'} />);
      });
  };

  const createFeedbackBank = (feedbackBank = undefined) => {
    const newBank = {
      title: 'Untitled feedback bank',
      smartComments: [
        {
          title: 'First feedback area',
          suggestions: ['First comment', 'Second comment'],
        },
        {
          title: 'Second feedback area',
          suggestions: ['First comment.', 'Second comment.'],
        },
      ],
    };

    createNewFeedbackBank(feedbackBank || newBank)
      .then((response) => {
        resetData();
        setIsShowNewBankPopUp(false);
        setFeedbackBankCreated(true);
        toast(<Toast message={'New feedback bank created'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error creating new feedback bank'} />);
      });
  };

  const createSystemFeedbackBank = (systemBankId) => {
    let newSystemBank = systemSmartAnnotations.find(
      (bank) => bank.id === systemBankId
    );
    const { title, smartComments } = newSystemBank;
    const newObject = { title: `Copy of ${title}`, smartComments };
    createNewFeedbackBank(newObject)
      .then((responce) => {
        setIsShowNewBankPopUp(false);
        toast(<Toast message={'New feedback bank created'} />);
        resetData();
        setFeedbackBankCreated(true);
      })
      .catch((error) => {
        toast(<Toast message={'Error creating new feedback bank'} />);
      });
  };

  const createSmartAnnotationHandler = () => {
    const smartAnnotationRequest = {
      title: 'Untitled feedback area',
      suggestions: ['First comment', 'Second comment'],
    };
    createSmartAnnotation(smartAnnotationRequest);
  };

  const createSmartAnnotation = (newSmartAnnotation) => {
    const newSmartAnnotations = smartAnnotations.map((smartAnnotation) => {
      if (smartAnnotation.id === feedbackBankId) {
        return {
          ...smartAnnotation,
          smartComments: [
            ...(smartAnnotation.smartComments || []),
            newSmartAnnotation,
          ],
        };
      }

      return smartAnnotation;
    });

    const foundSmartAnnotation = newSmartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === feedbackBankId
    );

    const { title, smartComments } = foundSmartAnnotation;
    const newObject = { title, smartComments };

    createNewSmartAnnotation(newObject, feedbackBankId)
      .then((result) => {

        setFeedbanksData((old) => ({
          ...old,
          _embedded: {
            ...old._embedded,
            commentbanks: [...systemSmartAnnotations, ...newSmartAnnotations],
          },
        }));
        toast(<Toast message={'Smart annotation created'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error updating Feedback bank'} />);
      });
  };

  const UpdateSmartBankTitleHandler = (newTitle, smartAnnotationIndex) => {
    const newSmartAnnotations = smartAnnotations.map((smartAnnotation) => {
      if (smartAnnotation.id === smartAnnotationIndex) {
        return {
          ...smartAnnotation,
          title: newTitle,
        };
      }

      return smartAnnotation;
    });

    const foundSmartAnnotation = newSmartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === smartAnnotationIndex
    );

    const { title, smartComments } = foundSmartAnnotation;
    const newObject = { title, smartComments };

    updateSmartAnnotation(newObject, smartAnnotationIndex)
      .then(() => {
        setFeedbanksData((old) => ({
          ...old,
          _embedded: {
            ...old._embedded,
            commentbanks: [...systemSmartAnnotations, ...newSmartAnnotations],
          },
        }));
        toast(<Toast message={'Feedback bank title updated'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error updating smart annotation'} />);
      });
  };

  const UpdateSmartAnotationHandler = (newSmartComment, index) => {
    setSmartAnnotationeditIndex(index);
    const newSmartAnnotations = smartAnnotations.map((smartAnnotation) => {
      if (smartAnnotation.id === feedbackBankId) {
        return {
          ...smartAnnotation,
          smartComments: smartAnnotation.smartComments.map((comment, ind) => {
            if (ind === index) {
              return newSmartComment;
            }
            return comment;
          }),
        };
      }

      return smartAnnotation;
    });
    const foundSmartAnnotation = newSmartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === feedbackBankId
    );

    const { title, smartComments } = foundSmartAnnotation;
    const newObject = { title, smartComments };

    updateSmartAnnotation(newObject, feedbackBankId)
      .then(() => {
        setFeedbanksData((old) => ({
          ...old,
          _embedded: {
            ...old._embedded,
            commentbanks: [...systemSmartAnnotations, ...newSmartAnnotations],
          },
        }));
        toast(<Toast message={'Smart annotation updated'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error updating smart annotation'} />);
      });
  };

  const deleteAnnotationHandler = (smartcommentId) => {
    const newSmartAnnotations = smartAnnotations.map((smartAnnotation) => {
      if (smartAnnotation.id === feedbackBankId) {
        return {
          ...smartAnnotation,
          smartComments: smartAnnotation.smartComments.filter(
            (comment, ind) => ind !== smartcommentId
          ),
        };
      }

      return smartAnnotation;
    });

    const foundSmartAnnotation = newSmartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === feedbackBankId
    );

    const { title, smartComments } = foundSmartAnnotation;
    const newObject = { title, smartComments };
    updateSmartAnnotation(newObject, feedbackBankId)
      .then(() => {
        setFeedbanksData((old) => ({
          ...old,
          _embedded: {
            ...old._embedded,
            commentbanks: [...systemSmartAnnotations, ...newSmartAnnotations],
          },
        }));
        toast(<Toast message={'Smart commit deleted'} />);
      })
      .catch((error) => {
        toast(<Toast message={'Error deleting smart commit'} />);
      });
  };

  const downloadCommentBank = (bankId) => {
    const annotation = smartAnnotations.find(
      (annotation) => annotation.id === bankId
    );

    if (!annotation) {
      console.error(`No annotation found with bankId: ${bankId}`);
      return;
    }

    const extractedCommentBank = {
      title: annotation.title,
      smartComments: annotation.smartComments,
    };
    exportJsonFile(extractedCommentBank, extractedCommentBank.title);
  };

  const handleCommentBankImport = async (event) =>{
    try {
      const importedJsonFile = await importJsonFile(event);
      setImportedCommentBank(importedJsonFile);
      setIsShowNewBankPopUp(false);
      setIsShowImportCommentBankPopup(true);
    } catch (error) {
      console.error("Error importing comment bank:", error);
    }
  }

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const NewBankPopContainer = ({ setIsShowNewBankPopUp }) => {
    const selectBankFun = (e, bank) => {
      e.preventDefault();
      setSelectedBank(bank);
      setTimeout(() => {
        if (selectedRef.current) {
          selectedRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
          });
        }
      }, 0);
    };
    return (
      <PopupBackground>
        <PopupContainer>
          <PopupTitleContainer>
            <PopupTitle>Add New Comment Bank</PopupTitle>
            <PopupTitleImg
              onClick={() => setIsShowNewBankPopUp(false)}
              src={closecircle}
            />
          </PopupTitleContainer>
          <PopupDialogContentBox>
            <PopupDialogContentBoxLeft>
              <CardContainer>
                <Card onClick={() => createFeedbackBank()}>
                  <CardImgCont>
                    <CardImg src={PlusBlue} />
                  </CardImgCont>
                  <CardTitle>Create Your Own</CardTitle>
                </Card>
                <ImportFileLabel>
                  <CardImgCont>
                    <CardImg src={DownloadIcon} rotate={true}/>
                  </CardImgCont>
                  <CardTitle>Import</CardTitle>
                  <ImportFile type="file" onChange={handleCommentBankImport} />
                </ImportFileLabel>
              </CardContainer>
              {systemSmartAnnotations.length > 0 && (
                <BankCommentTitle style={{ borderTop: '1px solid #C9C6CC80' }}>
                  Use a template
                </BankCommentTitle>
              )}

              {systemSmartAnnotations?.map((bank) => {
                return (
                  <Card
                    onClick={(e) => selectBankFun(e, bank)}
                    ref={bank.id === selectedBank?.id ? selectedRef : null}
                    style={{
                      backgroundColor:
                        bank.id === selectedBank?.id ? ' #F1E6FC' : '#ffffff',
                    }}
                  >
                    <CardImgDoc src={Doc} />

                    <CardTitle>{bank.title}</CardTitle>
                  </Card>
                );
              })}
            </PopupDialogContentBoxLeft>
            <PopupDialogContentBoxRight>
              <PreviewContainer>
                <PreviewIconCont>
                  <PrevieImg src={PreviewIcon} />
                  <Previewpara>Preview</Previewpara>
                </PreviewIconCont>
                {systemSmartAnnotations.length > 0 && (
                  <CreateButton
                    onClick={() => createSystemFeedbackBank(selectedBank.id)}
                  >
                    <ButtonText>Use template</ButtonText>
                  </CreateButton>
                )}
              </PreviewContainer>

              {selectedBank?.smartComments.map((comment) => {
                return (
                  <div key={comment.title}>
                    <BankCommentTitle>{comment.title}</BankCommentTitle>
                    {comment?.suggestions?.map((suggestion) => (
                      <Commentsuggestion key={suggestion}>
                        {suggestion}
                      </Commentsuggestion>
                    ))}
                  </div>
                );
              })}
            </PopupDialogContentBoxRight>
          </PopupDialogContentBox>
        </PopupContainer>
      </PopupBackground>
    );
  };

  const emptyFeedbackBank = () => {
    return (
      <EmptyBankContainer>
        <EmptyBankIconCont src={EmptyBankIcon} />
        <EmptyBankHeading>No comment banks created yet</EmptyBankHeading>
        <EmptyBankSubHeading>
          To start using comment banks, click below.
        </EmptyBankSubHeading>
        <EmptyBankContainerButton onClick={() => setIsShowNewBankPopUp(true)}>
          <TabsPlus src={Plus} />
          <TabsPlusText>New Bank</TabsPlusText>
        </EmptyBankContainerButton>
      </EmptyBankContainer>
    );
  };

  const tabChangeFunc = (event, newValue) => {
    setSmartAnnotationeditIndex(0);
    setFeedbackBankId(newValue);
    setFeedbackBankCreated(false);
  };

  return (
    <>
      {isShowImportCommentBankPopup && (
        <CommentBankDialog 
          commentBank={importedCommentBank}
          setCommentBankPreviewDialog={setIsShowImportCommentBankPopup}
          showActionButton={true}
          onActionButtonClick={()=> createFeedbackBank(importedCommentBank)}
        />
      )}
      {isShowNewBankPopUp && (
        <NewBankPopContainer setIsShowNewBankPopUp={setIsShowNewBankPopUp} />
      )}
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
            {!(smartAnnotations?.length > 0) ? (
              emptyFeedbackBank()
            ) : (
              <Frame1302>
                <TabsContainer>
                  <StyledTabs
                    variant="scrollable"
                    scrollButtons
                    value={feedbackBankId}
                    onChange={(event, newValue) =>
                      tabChangeFunc(event, newValue)
                    }
                    aria-label="Feedback Bank tabs"
                  >
                    {smartAnnotations?.map((bank, index) => (
                      <StyledTab
                        key={bank.id}
                        value={bank.id}
                        label={
                          <TabTitleContainer
                            bank={bank}
                            UpdateSmartBankTitleHandler={
                              UpdateSmartBankTitleHandler
                            }
                            deteteFeedbackBank={deteteFeedbackBank}
                            createCloneFeedbankBank={createCloneFeedbankBank}
                            showIcon={feedbackBankId === bank.id}
                            downloadCommentBank={downloadCommentBank}
                          />
                        }
                      />
                    ))}
                  </StyledTabs>
                  <MoreOptionsContainer>
                    <TabsPlusContainer
                      onClick={() => setIsShowNewBankPopUp(true)}
                    >
                      <TabsPlus src={Pluslight} />
                    </TabsPlusContainer>
                  </MoreOptionsContainer>
                </TabsContainer>
                <MarkingCriteriaList>
                  {
                    <FeedbackArea
                      key={Math.random()}
                      smartAnnotation={smartAnnotations?.find(
                        (sa) => sa.id === feedbackBankId
                      )}
                      UpdateSmartAnotationHandler={UpdateSmartAnotationHandler}
                      settingsMode={true}
                      deleteAnnotationHandler={deleteAnnotationHandler}
                      createSmartAnnotation={createSmartAnnotation}
                      smartAnnotationeditIndex={smartAnnotationeditIndex}
                      createSmartAnnotationHandler={
                        createSmartAnnotationHandler
                      }
                    />
                  }
                </MarkingCriteriaList>
              </Frame1302>
            )}
          </RightContainer>
        </InnerContainer>
      </MainContainer>
    </>
  );
};

export default CommentBanks;
