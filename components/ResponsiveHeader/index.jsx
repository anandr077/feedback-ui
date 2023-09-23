import Header from '../Header';
import HeaderSmall from '../HeaderSmall';
export default function ResponsiveHeader({ smallScreen, headerProps }) {
  if (smallScreen) {
    return <HeaderSmall headerProps={headerProps} />;
  }
  return <Header headerProps={headerProps} />;
}
