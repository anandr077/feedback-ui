import styled from 'styled-components'

const StrTarContainer = styled.div`
    display: flex;
    align-self: stretch;
    flex-direction: column;
    margin: 0 60px;
    border: 1px solid #F1E7FF;
    box-shadow: 0 2px 8px rgba(239, 232, 245, 1);
    border-radius: 12px;
    padding: 10px 0px;
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap" rel="stylesheet');
`

const StrTarHeading = styled.div`
    padding: 0 20px 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #F1E6FC;
    color: #301B72;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
`

const StrTarBody = styled.div`
   padding: 10px 20px 0px;

   &:last-child{
    padding-bottom: 10px;
   }
`

const StrTarTitle = styled.p`
   color: #1E252A;
   font-size: 16px;
   font-weight: 700;
   line-height: 20px;
`

const StrTarItem = styled.p`
   padding: 8px 20px;
   color: var(--chicago);
   font-size: 16px;
   line-height: 20px;
   font-weight: 400;
`

export {
    StrTarContainer,
    StrTarHeading,
    StrTarBody,
    StrTarTitle,
    StrTarItem
}
