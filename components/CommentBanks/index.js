import React, { useEffect, useRef } from 'react';
import {
  BankCommentTitle,
  ButtonConatiner,
  ButtonText,
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
import SecondSidebar from '../SecondSidebar';
import {
  createNewFeedbackBank,
  createNewMarkingCriteria,
  createNewSmartAnnotation,
  deleteSmartAnnotation,
  getFeedbackBanks,
  updateSmartAnnotation,
} from '../../service';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import SmartAnotation from '../SmartAnnotations';
import Loader from '../Loader';
import QuestionTooltip from '../../components2/QuestionTooltip';
import EmptyBankIcon from '../../static/img/emptyBank.svg';
import Plus from '../../static/img/Plus.svg';
import Pluslight from '../../static/img/Pluslight.svg';
import TabTitleContainer from '../Settings/AccountSettingsMarkingCriteriaDeskt/TabTitleContainer';
import Buttons from '../Classes/Buttons';
import questionMark from '../../static/img/question-mark.svg';
import { getUserId } from '../../userLocalDetails';
import closecircle from '../../static/img/closecircle.svg';
import PlusBlue from '../../static/img/Plus-blue.svg';
import Doc from '../../static/img/doc.svg';
import PreviewIcon from '../../static/img/preview.svg';
import FeedbackArea from './FeedbackArea';

const CommentBanks = () => {
  const [smartAnnotations, setSmartAnnotations] = React.useState();
  const [systemSmartAnnotations, setSystemSmartAnnotations] = React.useState();
  const [selectedBank, setSelectedBank] = React.useState();
  const [feedbackBankId, setFeedbackBankId] = React.useState(0);
  const [isShowNewBankPopUp, setShowNewBankPopUp] = React.useState(false);
  const [feedbackBankCreated, setFeedbackBankCreated] = React.useState(false);

  const [smartAnnotationUpdateIndex, setSmartAnnotationUpdateIndex] =
    React.useState(-1);
  const [smartAnnotationeditIndex, setSmartAnnotationeditIndex] =
    React.useState('');
  const selectedRef = useRef(null);
  const queryClient = useQueryClient();

  const feedbackBankQuery = useQuery({
    queryKey: ['feedbackBank'],
    queryFn: async () => {
      const result = await getFeedbackBanks();
      return result;
    },
    staleTime: 3600000,
  });

  useEffect(() => {
    if (feedbackBankQuery.data) {
      const nonSyatemBanks =
        feedbackBankQuery.data._embedded.commentbanks.filter(
          (bank) => !bank.isSystem
        );
      setFeedbackBankId(
        feedbackBankCreated
          ? nonSyatemBanks[nonSyatemBanks.length - 1]?.id
          : nonSyatemBanks[0]?.id
      );
      setSmartAnnotations(
        feedbackBankQuery.data._embedded.commentbanks.filter(
          (bank) => !bank.isSystem
        )
      );

      setSystemSmartAnnotations(
        feedbackBankQuery.data._embedded.commentbanks.filter(
          (bank) => bank.isSystem
        )
      );
      setSelectedBank(
        feedbackBankQuery.data._embedded.commentbanks.filter(
          (bank) => bank.isSystem
        )[0]
      );
    }
  }, [feedbackBankQuery.data]);

  const smartAnnotationsFrame = () => {
    const smartAnnotation = smartAnnotations.find(
      (sa) => sa.id === feedbackBankId
    );

    if (!smartAnnotation) {
      return null;
    }
    return (
      <FeedbackArea
        key={Math.random()}
        smartAnnotationIndex={feedbackBankId}
        smartAnnotationUpdateIndex={smartAnnotationUpdateIndex}
        smartAnnotation={smartAnnotation}
        UpdateSmartAnotationHandler={UpdateSmartAnotationHandler}
        settingsMode={true}
        deleteAnnotationHandler={deleteAnnotationHandler}
        createSmartAnnotation={createSmartAnnotation}
        teacherId={smartAnnotation.ownerId}
        smartAnnotationeditIndex={smartAnnotationeditIndex}
        createSmartAnnotationHandler={createSmartAnnotationHandler}
      />
    );
  };

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

        setSmartAnnotations(newSmartAnnotations);
        // showSnackbar('Feedback bank Deleted');
      })
      .catch(() => {
        // showSnackbar('Error deleting bank');
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
        queryClient.invalidateQueries(['feedbackBank']);
        // showSnackbar('feedback bank cloned');
        setFeedbackBankCreated(true);
      })
      .catch((error) => {
        // showSnackbar('Cloning failed');
      });
  };

  const createFeedbackBank = () => {
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

    createNewFeedbackBank(newBank)
      .then(() => {
        queryClient.invalidateQueries(['feedbackBank']);
        setShowNewBankPopUp(false);
        setFeedbackBankCreated(true);
        // showSnackbar('New feedback bank created');
      })
      .catch((error) => {
        // showSnackbar('Error creating new feedback bank');
      });
  };

  const createSystemFeedbackBank = (systemBankId) => {
    let newSystemBank = systemSmartAnnotations.find(
      (bank) => bank.id === systemBankId
    );
    const { title, smartComments } = newSystemBank;
    const newObject = { title: `Copy of ${title}`, smartComments };
    createNewFeedbackBank(newObject)
      .then(() => {
        // setSmartAnnotations([...smartAnnotations, newBank]);
        setShowNewBankPopUp(false);
        // showSnackbar('New feedback bank created');
        queryClient.invalidateQueries(['feedbackBank']);
        setFeedbackBankCreated(true);
      })
      .catch((error) => {
        console.log('first error', error);
        // showSnackbar('Error creating new feedback bank');
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
        setSmartAnnotations(newSmartAnnotations);
        // showSnackbar('Smart annotation created');
      })
      .catch((error) => {
        // showSnackbar('Error updating Feedback bank');
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
        setSmartAnnotations(newSmartAnnotations);
        // showSnackbar('Feedback bank title updated');
      })
      .catch((error) => {
        // showSnackbar('Error updating smart annotation');
      });
  };

  const UpdateSmartAnotationHandler = (
    newSmartComment,
    // smartAnnotationIndex,
    index
  ) => {
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
        setSmartAnnotations(newSmartAnnotations);
        // showSnackbar('Smart annotation updated');
      })
      .catch((error) => {
        // showSnackbar('Error updating smart annotation');
      });
  };

  const deleteAnnotationHandler = (smartcommentId) => {
    const NewSmartAnnotations = smartAnnotations.map((smartAnnotation) => {
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

    const foundSmartAnnotation = NewSmartAnnotations.find(
      (smartAnnotation) => smartAnnotation.id === feedbackBankId
    );

    const { title, smartComments } = foundSmartAnnotation;
    const newObject = { title, smartComments };
    updateSmartAnnotation(newObject, feedbackBankId)
      .then(() => {
        setSmartAnnotations(NewSmartAnnotations);
        // showSnackbar('Smart commit deleted');
      })
      .catch((error) => {
        // showSnackbar('Error deleting Smart commit');
      });
  };

  if (feedbackBankQuery.isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const findCurrentFeedbackBank =
    smartAnnotations?.length > 0 &&
    smartAnnotations?.find(
      (smartAnnotation) => smartAnnotation.id === feedbackBankId
    );

  const NewBankPopContainer = ({ setShowNewBankPopUp }) => {
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
              onClick={() => setShowNewBankPopUp(false)}
              src={closecircle}
            />
          </PopupTitleContainer>
          <PopupDialogContentBox>
            <PopupDialogContentBoxLeft>
              <Card onClick={() => createFeedbackBank()}>
                <CardImgCont>
                  <CardImg src={PlusBlue} />
                </CardImgCont>
                <CardTitle>Create Your Own</CardTitle>
              </Card>
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
        <EmptyBankContainerButton onClick={() => setShowNewBankPopUp(true)}>
          <TabsPlus src={Plus} />
          <TabsPlusText>New Bank</TabsPlusText>
        </EmptyBankContainerButton>
      </EmptyBankContainer>
    );
  };

  return (
    <>
      {isShowNewBankPopUp && (
        <NewBankPopContainer setShowNewBankPopUp={setShowNewBankPopUp} />
      )}
      <MainContainer>
        <InnerContainer>
          <SecondSidebar />
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
                    onChange={(event, newValue) => {
                      setFeedbackBankId(newValue);
                      setFeedbackBankCreated(false);
                      setSmartAnnotationeditIndex('');
                    }}
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
                          />
                        }
                      />
                    ))}
                  </StyledTabs>
                  <MoreOptionsContainer>
                    <TabsPlusContainer
                      onClick={() => setShowNewBankPopUp(true)}
                    >
                      <TabsPlus src={Pluslight} />
                    </TabsPlusContainer>
                  </MoreOptionsContainer>
                </TabsContainer>
                <MarkingCriteriaList>
                  {smartAnnotationsFrame()}
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
