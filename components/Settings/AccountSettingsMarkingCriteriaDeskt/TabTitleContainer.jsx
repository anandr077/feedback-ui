import React, { useState } from 'react';
import Rename from '../../../static/img/Rename.svg';
import Copy from '../../../static/img/Copy.svg';
import TabsDelete from '../../../static/img/tabs-delete.svg';
import DownLoadCommentBankIcon from '../../../static/img/Download.svg';
import { BankTitleeditTitle, TabContainer, TabTitle, TabsImage } from './style';
import QuestionTooltip from '../../../components2/QuestionTooltip';

function TabTitleContainer({
  bank,
  UpdateSmartBankTitleHandler,
  deteteFeedbackBank,
  createCloneFeedbankBank,
  showIcon,
  downloadCommentBankData
}) {
  const [editTitle, setEditTitle] = useState(bank.title);

  const [editingTitle, setEditingTitle] = useState(false);

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
                  text={'Rename'}
                  img={Rename}
                  onClickFn={() => setEditingTitle(bank.id)}
                />
                <QuestionTooltip
                  text={'Copy'}
                  img={Copy}
                  onClickFn={() => createCloneFeedbankBank(bank.id)}
                />
                <QuestionTooltip
                  text={'Delete'}
                  img={TabsDelete}
                  onClickFn={() => deteteFeedbackBank(bank.id)}
                />
                <QuestionTooltip
                  text={'Export'}
                  img={DownLoadCommentBankIcon}
                  onClickFn={() => downloadCommentBankData(bank.id)}
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
