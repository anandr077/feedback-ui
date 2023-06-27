import React from "react";
import styled from "styled-components";
import { IbmplexsansNormalWhite20px, IbmplexsansNormalPersianIndigo20px, feedbacksIbmplexsansNormalPersianIndigo16px } from "../../../styledMixins";

function Shortcut(props) {
    const {label} =props;
    return (
        <ShortcutContainer>
            
                <ShortcutLabel>{label}</ShortcutLabel>
          
        </ShortcutContainer>
    );

}

const ShortcutContainer = styled.div`
display: flex;
padding: 12px 16px;
align-items: flex-start;
gap: 10px;
align-self: stretch;
border-radius: 24.5px;
border: 1px solid #E6CCFF;
background: #F1E7FF;
`;

const ShortcutLabel = styled.div`
${feedbacksIbmplexsansNormalPersianIndigo16px}
`;

export default Shortcut;