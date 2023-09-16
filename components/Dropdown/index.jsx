import React from 'react';
import styled from 'styled-components';
import { IbmplexsansNormalBlack14px } from '../../styledMixins';

function Dropdown(props) {
  const { heading, className } = props;

  return (
    <Dropdown1 className={`dropdown ${className || ''}`}>
      <Heading className="heading">{heading}</Heading>
      <Vector className="vector" src="/img/vector@2x.png" alt="Vector" />
    </Dropdown1>
  );
}

const Dropdown1 = styled.article`
  width: 122px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  background-color: var(--wild-sand);
  border-radius: 8px;
  border: 1px solid;
  border-color: var(--concord);

  &.dropdown.dropdown-2 {
    width: 75px;
  }

  &.dropdown.dropdown-5 {
    width: 75px;
  }

  &.dropdown.dropdown-7 {
    width: 75px;
  }
`;

const Heading = styled.div`
  ${IbmplexsansNormalBlack14px}
  margin-top: 6px;
  width: 53px;
  height: 18px;
  margin-left: 8px;
  letter-spacing: 0;
  line-height: normal;
`;

const Vector = styled.img`
  margin-top: 14.2px;
  width: 7.5166015625px;
  height: 4.5px;
  margin-right: 7.2px;
`;

const Heading1 = styled.div`
  ${IbmplexsansNormalBlack14px}

  .dropdown.dropdown-1  & {
    width: 91px;
  }
`;

const Heading2 = styled.div`
  ${IbmplexsansNormalBlack14px}

  .dropdown.dropdown-2  & {
    width: 32px;
  }
`;

const Heading3 = styled.div`
  ${IbmplexsansNormalBlack14px}

  .dropdown.dropdown-4  & {
    width: 91px;
  }
`;

const Heading4 = styled.div`
  ${IbmplexsansNormalBlack14px}

  .dropdown.dropdown-5  & {
    width: 32px;
  }
`;

const Heading5 = styled.div`
  ${IbmplexsansNormalBlack14px}

  .dropdown.dropdown-6  & {
    width: 91px;
  }
`;

const Heading6 = styled.div`
  ${IbmplexsansNormalBlack14px}

  .dropdown.dropdown-7  & {
    width: 32px;
  }
`;

export default Dropdown;
