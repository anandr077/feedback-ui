import React from "react";
import ReviewsFrame1331 from "../ReviewsFrame1331";
import Buttons42 from "../Buttons42";
import Buttons4 from "../Buttons4";
import styled from "styled-components";
import {
  IbmplexsansNormalDeepBronze16px,
  IbmplexsansNormalMountainMist16px,
} from "../../../styledMixins";
import "./Shortcuts.css";

function Shortcuts(props) {
  const {
    search,
    searchnormal1,
    useMoreTechniques,
    shortenQuotes,
    thisIsTooLong,
    greatAnswer,
    line26,
    frame13311Props,
    buttons4Props,
    frame13312Props,
  } = props;

  return (
    <div className="shortcuts screen">
      <Shortcuts1>
        <Frame1382>
          <ReviewsFrame1331
            iconsaxLinearMagicpen={frame13311Props.iconsaxLinearMagicpen}
            shortcuts={frame13311Props.shortcuts}
          />
          <Frame1326>
            <Search>{search}</Search>
            <Searchnormal1 src={searchnormal1} alt="searchnormal1" />
          </Frame1326>
          <Frame1334>
            <Frame1332>
              <Frame1297>
                <UseMoreTechniques>{useMoreTechniques}</UseMoreTechniques>
              </Frame1297>
              <Frame1297>
                <UseMoreTechniques>{shortenQuotes}</UseMoreTechniques>
              </Frame1297>
            </Frame1332>
            <Frame1332>
              <Frame1384>
                <UseMoreTechniques>{thisIsTooLong}</UseMoreTechniques>
              </Frame1384>
              <Frame1297>
                <UseMoreTechniques>{greatAnswer}</UseMoreTechniques>
              </Frame1297>
            </Frame1332>
          </Frame1334>
          <Buttons42>{buttons4Props.children}</Buttons42>
        </Frame1382>
        <Line26 src={line26} alt="Line 26" />
        <Frame1383>
          <ReviewsFrame1331
            iconsaxLinearMagicpen={frame13312Props.iconsaxLinearMagicpen}
            shortcuts={frame13312Props.shortcuts}
          />
          <Buttons4 />
        </Frame1383>
      </Shortcuts1>
    </div>
  );
}

const Shortcuts1 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 0px;
  background-color: var(--white);
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--electric-violet);
  box-shadow: 0px 4px 16px #7200e01a;
`;

const Frame1382 = styled.div`
  display: flex;
  flex-direction: column;
  width: 352px;
  align-items: flex-start;
  gap: 12px;
  padding: 0px 16px;
  position: relative;
`;

const Frame1326 = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 12px;
  position: relative;
  align-self: stretch;
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--text);
`;

const Search = styled.div`
  ${IbmplexsansNormalMountainMist16px}
  position: relative;
  flex: 1;
  letter-spacing: 0;
  line-height: normal;
`;

const Searchnormal1 = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
`;

const Frame1334 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: relative;
  align-self: stretch;
`;

const Frame1332 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const Frame1297 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 12px;
  position: relative;
  background-color: var(--marzipan);
  border-radius: 24.5px;
  border: 1px solid;
  border-color: var(--orange-yellow);
`;

const UseMoreTechniques = styled.div`
  ${IbmplexsansNormalDeepBronze16px}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const Frame1384 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 6px 12px;
  position: relative;
  background-color: var(--marzipan);
  border-radius: 24.5px;
  overflow: hidden;
  border: 1px solid;
  border-color: var(--orange-yellow);
`;

const Line26 = styled.img`
  position: relative;
  min-width: 336px;
  height: 1px;
  object-fit: cover;
`;

const Frame1383 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0px 16px;
  position: relative;
  align-self: stretch;
`;

export default Shortcuts;
