import React from 'react';
import { Breadcrumb1, Assignments } from './style';

function Breadcrumb(props) {
  const { text, link } = props;
  return (
    <Breadcrumb1 onClick={() => (window.location.href = link)}>
      <Assignments>{text}</Assignments>
    </Breadcrumb1>
  );
}

export default Breadcrumb;
