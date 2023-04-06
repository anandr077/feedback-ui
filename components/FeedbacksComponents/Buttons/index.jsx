import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumWhite16px } from "../../../styledMixins";

function Buttons(props) {
  const { arrowleft } = props;

  return (
    <Buttons1>
      <Arrowleft src={arrowleft} alt="arrowleft" />
      <Button>Previous</Button>
    </Buttons1>
  );
}

const Buttons1 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Arrowleft = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Buttons2 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Arrowleft1 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button1 = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Buttons3 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Arrowleft2 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button2 = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Buttons4 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Arrowleft3 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button3 = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

const Buttons5 = styled.article`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;
  position: relative;
  background-color: var(--light-mode-purple);
  border-radius: 30px;
  border: 1px solid;
`;

const Arrowleft4 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Button4 = styled.div`
  ${IbmplexsansMediumWhite16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 0;
  line-height: normal;
`;

export default Buttons;
