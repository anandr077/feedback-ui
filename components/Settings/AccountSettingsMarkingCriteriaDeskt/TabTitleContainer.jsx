import React, { useState } from 'react';
import Rename from '../../../static/img/Rename.svg';
import Hide from '../../../static/img/Hide.svg';
import Copy from '../../../static/img/Copy.svg';
import TabsDelete from '../../../static/img/tabs-delete.svg';
import { BankTitleeditTitle, TabContainer, TabTitle, TabsImage } from './style';
import { getUserId } from '../../../userLocalDetails';

function TabTitleContainer({
  bank,
  UpdateSmartBankTitleHandler,
  deteteFeedbackBank,
  showIcon,
  createCloneFeedbankBank,
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
              </>
            )}
          </>
        )}
      </TabContainer>
    </>
  );
}

export default TabTitleContainer;
