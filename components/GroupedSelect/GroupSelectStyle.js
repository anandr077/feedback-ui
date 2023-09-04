import styled from 'styled-components'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


//custom group select
const CustomGroupSelectDiv = styled.div`
  position: relative;
  width: 100%;
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
  cursor: pointer;
`

const CustomHiddenOptions = styled.div`
  position: absolute;
  top: 100%;
  width: calc(100% + 20%);
  background-color: white;
  box-shadow: 0 4px 16px rgba(239, 232, 245, 1);
  background-color: #FEFEFE;
  border: 1px solid #F1E7FF;
  padding: 10px 20px;
  border-radius: 10px;
  z-index: 1000;
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

const CustomOpt = styled.p`
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
    GroupSelect,
    Optgroup,
    OptGroupOption,


    CustomGroupSelectDiv,
    CustomOptionDiv,
    CustomHiddenOptions,
    OptionLabel,
    CustomOpt,
}

export default ArrowDownIconWithHover;