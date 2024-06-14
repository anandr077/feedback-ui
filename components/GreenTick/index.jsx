import React from 'react';
import {
  HeadingDropdown,
  StatusSection,
  StatusSmallTick,
  StatusText,
} from './style';
import GreenSmallTick from '../../static/img/GreenSmallTick.svg';
import TickMark from '../../static/img/Ticklightcolor.svg';
import GreenTick from '../../static/img/GreenTick.svg';

export function GreenTickText({ text }) {
  return (
    <>
      <StatusSection>
        <StatusSmallTick src={GreenSmallTick} />
        <StatusText>{text}</StatusText>
      </StatusSection>
    </>
  );
}

export function GreenTickComponent({ ShowGreen }) {
  return (
    <HeadingDropdown>
      <img src={ShowGreen ? GreenTick : TickMark} alt="tick mark" />
    </HeadingDropdown>
  );
}
