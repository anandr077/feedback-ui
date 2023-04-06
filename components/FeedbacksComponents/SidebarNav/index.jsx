import React from "react";
import styled from "styled-components";

function SidebarNav() {
  return (
    <SidebarNav1>
      <IconsaxLineararrowright2
        src="/img/iconsax-linear-arrowright2@2x.png"
        alt="Iconsax/Linear/arrowright2"
      />
      <Q1PoremIpsumDolo>
        Q1. Porem ipsum dolor sit amet, consectetur adipiscing elit.
      </Q1PoremIpsumDolo>
    </SidebarNav1>
  );
}

const SidebarNav1 = styled.article`
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
`;

const Q1PoremIpsumDolo = styled.p`
  position: relative;
  flex: 1;
  margin-top: -1px;
  font-family: var(--font-family-ibm_plex_sans);
  font-weight: 400;
  color: var(--light-mode-purple);
  font-size: var(--font-size-s);
  letter-spacing: 0;
  line-height: normal;
`;

export default SidebarNav;
