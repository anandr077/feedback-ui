import Footer from "../Footer";
import FooterSmall from "../FooterSmall";

export default function ResponsiveFooter({ smallScreen }){
    if(smallScreen){
        return <FooterSmall />
    }
    return <Footer />
}