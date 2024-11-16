import styled from "styled-components";

export const FileContainer = styled.div`
    height: 90vh;
    min-width: 40vw;
    z-index: 1000;
    display: flex;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    img{
        height: 100%;
        margin: auto;
    }
`; 