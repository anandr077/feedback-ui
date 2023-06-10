import React from "react";
import VericalNav from "../VericalNav";
import VericalNav2 from "../VericalNav2";
import styled from "styled-components";


function Frame1322(props) {
  const { vericalNav1Props, vericalNav2Props, vericalNav2Props2 } = props;

  return (
    <Frame13221>
      <VericalNav>{vericalNav1Props.children}</VericalNav>
      <VericalNav2>{vericalNav2Props.children}</VericalNav2>
      <VericalNav>{vericalNav2Props2.children}</VericalNav>
    </Frame13221>
  );
}

const Frame13221 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame13222 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame13223 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

export default Frame1322;
