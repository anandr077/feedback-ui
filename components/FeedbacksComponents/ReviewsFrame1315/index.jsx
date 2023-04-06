import React from "react";
import Breadcrumb from "../Breadcrumb";
import Breadcrumb2 from "../Breadcrumb2";
import styled from "styled-components";

function ReviewsFrame1315(props) {
  const { breadcrumb21Props, breadcrumb22Props } = props;

  return (
    <Frame13151>
      <Breadcrumb />
      <Breadcrumb2 assignments={breadcrumb21Props.assignments} />
      <Breadcrumb2 assignments={breadcrumb22Props.assignments} />
    </Frame13151>
  );
}

const Frame13151 = styled.div`
  display: flex;
  margin-left: 240px;
  width: 493px;
  height: 18px;
  position: relative;
  margin-top: 20px;
  align-items: flex-start;
  gap: 4px;
`;

export default ReviewsFrame1315;
