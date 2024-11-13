import React, { useState } from 'react';
import Rename from '../../../static/img/Rename.svg';
import Copy from '../../../static/img/Copy.svg';
import TabsDelete from '../../../static/img/tabs-delete.svg';
import DownLoadCommentBankIcon from '../../../static/img/Download.svg';
import { BankTitleeditTitle, TabContainer, TabTitle, TabsImage } from './style';

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
                {(
                  <TabsImage
                    onClick={() => setEditingTitle(true)}
                    src={Rename}
                  />
                )}
                <TabsImage
                  onClick={() => createCloneFeedbankBank(bank.id)}
                  src={Copy}
                />

                {(
                  <TabsImage
                    onClick={() => deteteFeedbackBank(bank.id)}
                    src={TabsDelete}
                  />
                )}
                {(
                  <TabsImage
                    onClick={() => downloadCommentBankData(bank.id)}
                    src={DownLoadCommentBankIcon}
                  />
                )}
              </>
            )}
          </>
        )}
      </TabContainer>
    </>
  );
}

export default TabTitleContainer;
