import React, { useState } from 'react';
import { BankTitleeditTitle, TabContainer, TabTitle, TabsImage } from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';
import { useResizedImage } from '../../../components2/resizeImage';
import Loader from '../../Loader';

function TabTitleContainer({
  bank,
  UpdateSmartBankTitleHandler,
  deteteFeedbackBank,
  createCloneFeedbankBank,
  showIcon,
  downloadCommentBank
}) {
  const [editTitle, setEditTitle] = useState(bank.title);
  const [editingTitle, setEditingTitle] = useState(false);
  const resizedImages = useResizedImage();
 

  const handleTitleTextChange = (event) => {
    setEditTitle(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setEditingTitle(false);
      UpdateSmartBankTitleHandler(editTitle, bank.id);
    }
  };
  const handleOnBlur = () => {
    setEditingTitle(false);
    UpdateSmartBankTitleHandler(editTitle, bank.id);
  };

  if(!resizedImages){
    return <Loader />
  }

  return (
    <>
      <TabContainer>
        {editingTitle ? (
          <BankTitleeditTitle
            value={editTitle}
            onChange={handleTitleTextChange}
            onBlur={() => handleOnBlur()}
            onKeyPress={handleKeyPress}
          ></BankTitleeditTitle>
        ) : (
          <>
            <TabTitle>{editTitle}</TabTitle>

            {showIcon && (
              <>
                <QuestionTooltip
                  text={'Export'}
                  img={resizedImages.export}
                  onClickFn={() => downloadCommentBank(bank.id)}
                />
                <QuestionTooltip
                  text={'Rename'}
                  img={resizedImages.rename}
                  onClickFn={() => setEditingTitle(bank.id)}
                />
                <QuestionTooltip
                  text={'Copy'}
                  img={resizedImages.copy}
                  onClickFn={() => createCloneFeedbankBank(bank.id)}
                />
                <QuestionTooltip
                  text={'Delete'}
                  img={resizedImages.delete}
                  onClickFn={() => deteteFeedbackBank(bank.id)}
                />
              </>
            )}
          </>
        )}
      </TabContainer>
    </>
  );
}

export default TabTitleContainer;
