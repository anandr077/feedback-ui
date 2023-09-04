import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


//custom group select
const CustomGroupSelectDiv = styled.div`
  position: relative;
  width: 100%;
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@700&display=swap" rel="stylesheet');
  font-family: 'IBM Plex Sans', sans-serif;
`

const CustomOptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  overflow-x: hidden;
  height: 50px;
  background-color: transparent;
  border: 1px solid #6304BF;
  color: #1E252A;
  border-radius: 12px;
  padding: 0 15px;
  white-space: nowrap;
  background-color: white;
  cursor: pointer;
`

const CustomOptionTitle = styled.p`
  flex: 1;
  max-width: 90%;
  overflow: hidden; 
  text-overflow: ellipsis;
  user-select: none;
`

const CustomHiddenOptions = styled.div`
  position: absolute;
  top: 100%;
  width: calc(100% + 20%);
  max-width: 180%;
  background-color: white;
  box-shadow: 0 4px 16px rgba(239, 232, 245, 1);
  background-color: #FEFEFE;
  border: 1px solid #F1E7FF;
  padding: 10px 20px;
  border-radius: 10px;
  max-height: 400px;
  overflow-y: scroll;
  z-index: 1000;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent; 
  
  &::-webkit-scrollbar {
    width: 0; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent; 
  }
  &::-webkit-scrollbar-track {
    background-color: transparent; 
  }
`

const OptGroupOption = styled.div`
  margin-bottom: 10px;
  width: 100%;
  overflow-wrap: break-word;
`

const OptionLabel = styled.h4`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #1E252A;
  &:last-child{
    margin-bottom: 0px;
  }
`

const CustomOpt = styled.div`
   padding: 10px 15px;
   border-radius: 7px;
   background-color: white;
   box-shadow: 0 2px 4px rgba(239, 232, 245, 1);
   margin-bottom: 5px;
   cursor: pointer;

   &:hover{
    background-color: #dec6ff;
   }
`

const CustomOptLavel = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #232b31;
  margin-bottom: 5px;
`

const StyledArrowDownIcon = styled(KeyboardArrowDownIcon)`
  font-size: 24px; 
  font-weight: 400;
  transition: color 0.3s; 
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: white;
  display: grid;
  place-items: center;
  cursor: pointer; 

  &:hover {
    background-color: #F3F3F3;
  }
`;

const ArrowDownIconWithHover = () => {
  return <StyledArrowDownIcon />;
};

export {
    OptGroupOption,
    CustomGroupSelectDiv,
    CustomOptionDiv,
    CustomHiddenOptions,
    OptionLabel,
    CustomOpt,
    CustomOptionTitle,
    CustomOptLavel
}

export default ArrowDownIconWithHover;