import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalShark16px } from "../../styledMixins";


function Frame1441(props) {
  const { children, className } = props;

  return (
    <Frame14411 className={`frame-1441 ${className || ""}`}>
      <Ellipse14 className="ellipse-14-1"></Ellipse14>
      <Structure className="structure">{children}</Structure>
    </Frame14411>
  );
}

const Frame14411 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Ellipse14 = styled.div`
  position: relative;
  min-width: 12px;
  height: 12px;
  background-color: #e39a99;
  border-radius: 6px;
`;

const Structure = styled.div`
  ${IbmplexsansNormalShark16px}
  position: relative;
  flex: 1;
  margin-top: -0.5px;
  letter-spacing: 0;
  line-height: normal;
  white-space: nowrap;
`;

const Ellipse141 = styled.div`
  .frame-1441.frame-1441-1 & {
    background-color: #b9d7a7;
  }
`;

const Ellipse142 = styled.div`
  .frame-1441.frame-1441-2 & {
    background-color: #f4cb9b;
  }
`;

const Ellipse143 = styled.div`
  .frame-1441.frame-1441-3 & {
    background-color: #a6c4c9;
  }
`;

const Ellipse144 = styled.div`
  .frame-1441.frame-1441-4 & {
    background-color: var(--cold-purple);
  }
`;

const Ellipse145 = styled.div`
  .frame-1441.frame-1441-5 & {
    background-color: #a4c5e9;
  }
`;

export default Frame1441;
