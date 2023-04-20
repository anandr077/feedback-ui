import React from "react";

import styled from "styled-components";
import { IbmplexsansNormalPersianIndigo14px } from "../../../styledMixins";

function Shortcuts(props) {
  const { shortcuts, handleShortcutAddComment } = props;
  const allshortcuts = shortcuts.map((shortcut) => {
    return (
      <ShortcutBox onClick={() => handleShortcutAddComment(shortcut.text)}>
        <ShortcutText>{shortcut.text}</ShortcutText>
      </ShortcutBox>
    );
  });
  return <ShortcutsContainer>{allshortcuts}</ShortcutsContainer>;
}
const ShortcutsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 0px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
`;

const ShortcutBox = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 12px;
  position: relative;
  background-color: var(--electric-violet);
  border-radius: 24.5px;
  border: 1px solid;
  border-color: var(--electric-violet);
`;

const ShortcutText = styled.div`
  ${IbmplexsansNormalPersianIndigo14px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

export default Shortcuts;
