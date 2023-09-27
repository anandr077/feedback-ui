import { useLocation } from 'react-router-dom';
import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
import { homeHeaderProps } from '../../utils/headerProps';

export default function ResponsiveHeader({ isSmallScreen}) {
  const location = useLocation()

  console.log(location)
  const headerProps = getHeaderProps(location)
  
  if (isSmallScreen) {
    return <HeaderSmall headerProps={headerProps} />;
  }
  return <Header headerProps={headerProps} />;
}

const getHeaderProps = (location) =>{
  if(location.includes === '/') return homeHeaderProps

  return homeHeaderProps
}


