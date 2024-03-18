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
  hideBanksidHandler,
}) {
  const [editTitle, setEditTitle] = useState(bank.title);

  const [editingTitle, setEditingTitle] = useState(false);

  const handleTitleTextChange = (event) => {
    setEditTitle(event.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      UpdateSmartBankTitleHandler(editTitle, bank.id);
    }
  };

  return (
    <>
      <TabContainer>
        {editingTitle ? (
          <BankTitleeditTitle
            value={editTitle}
            onChange={handleTitleTextChange}
            onBlur={() => UpdateSmartBankTitleHandler(editTitle, bank.id)}
            onKeyPress={handleKeyPress}
          ></BankTitleeditTitle>
        ) : (
          <>
            <TabTitle>{editTitle}</TabTitle>

            {showIcon && (
              <>
                {bank.ownerId === getUserId() && (
                  <TabsImage
                    onClick={() => setEditingTitle(true)}
                    src={Rename}
                  />
                )}
                <TabsImage
                  onClick={() => createCloneFeedbankBank(bank.id)}
                  src={Copy}
                />

                {bank.ownerId === getUserId() && (
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
