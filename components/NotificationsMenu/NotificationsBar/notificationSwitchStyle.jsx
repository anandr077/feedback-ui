import styled from 'styled-components';


export const NotificationBtnContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 5px;
    margin: 5px 0;
`

export const Button = styled.button`
    width: 108px;
    height: 30px;
    border-radius: 16px;
    padding: 4px 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-family: 'IBM Plex Sans';
    color: #1E252A;
    font-weight: bold;

    &.active{
        background-color: #7200E0 !important;
        color: white;
    }

    &:hover{
        background-color: #dec6ff;
    }
`


