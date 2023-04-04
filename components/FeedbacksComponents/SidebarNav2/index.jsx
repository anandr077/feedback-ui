import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalGraniteGray16px } from "../../../styledMixins";


function SidebarNav2(props) {
  const { className } = props;

  return (
    <SidebarNav className={`sidebar-nav-1 ${className || ""}`}>
      <IconsaxLineararrowright2
        className="iconsax-lineararrowright2-1"
        src="/img/iconsax-linear-arrowright2-1@2x.png"
        alt="Iconsax/Linear/arrowright2"
      />
      <Q1PoremIpsumDolo className="q1-porem-ipsum-dolo-6">
        Q1. Porem ipsum dolor sit amet, consectetur adipiscing elit.
      </Q1PoremIpsumDolo>
    </SidebarNav>
  );
}

const SidebarNav = styled.article`
  display: flex;
  align-items: center;
  gap: 12px;
  position: relative;
  align-self: stretch;
`;

const IconsaxLineararrowright2 = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
  margin-top: -7644px;
  margin-left: -5316px;
`;

const Q1PoremIpsumDolo = styled.p`
  ${IbmplexsansNormalGraniteGray16px}
  position: relative;
  flex: 1;
  margin-top: -1px;
  letter-spacing: 0;
  line-height: normal;
`;

const IconsaxLineararrowright21 = styled.img`
  .sidebar-nav-1.sidebar-nav-2 & {
    margin-top: -7710px;
  }
`;

const IconsaxLineararrowright22 = styled.img`
  .sidebar-nav-1.sidebar-nav-3 & {
    margin-top: -7776px;
  }
`;

const IconsaxLineararrowright23 = styled.img`
  .sidebar-nav-1.sidebar-nav-4 & {
    margin-top: -7842px;
  }
`;

export default SidebarNav2;
