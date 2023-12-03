import Footer from "../Footer";
import FooterSmall from "../FooterSmall";
import { isSmallScreen } from "../ReactiveRender";

export default function ResponsiveFooter(){
    if(isSmallScreen()){
        return <FooterSmall />
    }
    return <Footer />
}