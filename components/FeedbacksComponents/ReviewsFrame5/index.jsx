import React from "react";
import NavElement from "../NavElement";
import styled from "styled-components";

function Frame5(props) {
  const { navElement1Props, navElement2Props, navElement3Props } = props;

  return (
    <ReviewsFrame51>
      <NavElement
        home3={navElement1Props.home3}
        place={navElement1Props.place}
      />
      <NavElement
        home3={navElement2Props.home3}
        place={navElement2Props.place}
        className={navElement2Props.className}
      />
      <NavElement
        home3={navElement3Props.home3}
        place={navElement3Props.place}
        className={navElement3Props.className}
      />
    </ReviewsFrame51>
  );
}

const ReviewsFrame51 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

const Frame52 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex: 1;
`;

export default Frame5;
