import React from "react";
import styled from "styled-components";
import { IbmplexsansMediumBlack16px } from "../../../styledMixins";
import { Avatar } from "@boringer-avatars/react";

function ReviewsFrame132532(props) {
  const { isShare, reviewer, isClosable, onClose } = props;
  const avatar = (
    <Avatar
      title={false}
      size={25}
      variant="beam"
      name={reviewer}
      square={false}
    />
  );
  const closeFrame = isClosable ? <More onClick={onClose} src="/icons/closecircle@2x.png" alt="more" /> : <></>
  const shareIcon = <Ellipse7 src="/icons/share.png" />;
  const commenterFrame = isShare ? shareIcon : avatar;
  const reviewerFrame = isShare ? "Shared with class" : reviewer;
  return (
    <Frame1325>
      <Frame1324>
        {commenterFrame}
        <Instructer>{reviewerFrame}</Instructer>
      </Frame1324>
      {closeFrame}
    </Frame1325>
  );
}

const Frame1325 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const Frame1324 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  flex: 1;
`;

const Ellipse7 = styled.img`
  position: relative;
  min-width: 20px;
  height: 20px;
  object-fit: cover;
`;

const Instructer = styled.div`
  ${IbmplexsansMediumBlack16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const More = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

export default ReviewsFrame132532;
