import React from 'react';
import styled from 'styled-components';
import {
  IbmplexsansNormalShark20px,
  IbmplexsansMediumPersianIndigo20px,
} from '../../../styledMixins';

function Frame136652(props) {
  const { q2PoremIpsumDolo } = props;

  return (
    <ReviewsFrame1366>
      <Q2PoremIpsumDolo>{q2PoremIpsumDolo}</Q2PoremIpsumDolo>
      <ToremIpsumDolorSi>
        Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim.
      </ToremIpsumDolorSi>
    </ReviewsFrame1366>
  );
}

const ReviewsFrame1366 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  padding: 0px 100px;
  position: relative;
  align-self: stretch;
`;

const Q2PoremIpsumDolo = styled.p`
  ${IbmplexsansMediumPersianIndigo20px}
  position: relative;
  align-self: stretch;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const ToremIpsumDolorSi = styled.p`
  ${IbmplexsansNormalShark20px}
  position: relative;
  align-self: stretch;
  letter-spacing: 0;
  line-height: normal;
`;

export default Frame136652;
