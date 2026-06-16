import "../App.css";
import TitleBar from "../components/TitleBar";
import DoubleImage from "../components/DoubleImage";
import Carousel from "../components/Carousel";
import BB8 from "../assets/OwenL_SketchJournal2_Ver06 .png"
import Windmills from "../assets/Windmills.png";
import Boat from "../assets/BoatDrawing.jpg";
import ParagraphText from "../components/ParagraphText";
import Name from "../assets/Name.png";
import Footer from "../components/Footer";
import Spacer from "../components/Spacer";
import MenuBar from "../components/MenuBar";
import ImageRight from "../components/ImageRight";

export default function VisualArt () {

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <MenuBar></MenuBar>
                <Carousel></Carousel>
                <Spacer count={1}></Spacer>
                <ParagraphText title={"Full Portfolios"} text={"Below are the full portfolios of the various" +
                    " types of work I've done. Digital Painting and Minecraft are the two largest collections, but there" +
                    " are other works as well such as photo editing and hand drawn art."}></ParagraphText>
                <DoubleImage img1Src={BB8} img2Src={Windmills} alt1={"A digital drawing of BB8"}
                             alt2={"A Minecraft build of windmills in a field."} title1={"Digital Painting"}
                             title2={"Minecraft Building"} link1={"digitalpainting"}
                             link2={"minecraft"}></DoubleImage>
                <ImageRight imgSrc={Boat} alt={"A drawing of a viking boat model"} title={"Digital and Physical Art"}
                            text={"A portfolio of the photo editing and physical art I have made. There's no connecting" +
                                "theme to these, they're just the best pieces I have in these areas."}
                            link={"drawing"} target={""}></ImageRight>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
}