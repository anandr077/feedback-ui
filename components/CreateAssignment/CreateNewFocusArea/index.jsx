import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark16px } from "../../styledMixins";
import "./CreateNewFocusArea.css";

function CreateNewFocusArea(props) {
  const { xnew, line34, add, createNewFocusAreaNew } = props;

  return (
    <div className="create-new-focus-area screen">
      <Frame1321>
        <Frame1369>
          <New>{xnew}</New>
        </Frame1369>
      </Frame1321>
      <Line34 src={line34} alt="Line 34" />
      <Frame13211>
        <Checkbox>
          <Add src={add} alt="add" />
          <CreateNewFocusAreaNew>{createNewFocusAreaNew}</CreateNewFocusAreaNew>
        </Checkbox>
      </Frame13211>
    </div>
  );
}

const Frame1321 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 0px 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1369 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const New = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

const Line34 = styled.img`
  position: relative;
  align-self: stretch;
  min-width: 281px;
  height: 1px;
  object-fit: cover;
`;

const Frame13211 = styled.div`
  display: flex;
  flex-direction: column;
  width: 281px;
  align-items: flex-start;
  gap: 12px;
  padding: 0px 20px;
  position: relative;
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  align-self: stretch;
`;

const Add = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
`;

const CreateNewFocusAreaNew = styled.p`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

export default CreateNewFocusArea;
