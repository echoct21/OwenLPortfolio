import TitleBar from "../../components/TitleBar";
import Name from "../../assets/Name.png";
import MenuBar from "../../components/MenuBar";
import Footer from "../../components/Footer";
import ParagraphText from "../../components/ParagraphText";
import Spacer from "../../components/Spacer";
import ImageGrid from "../../components/ImageGrid";

import BancroftArch from "../../assets/TPC_BancroftArch.jpg";
import BancroftTower from "../../assets/TPC_BancroftTower.jpg";
import Branch from "../../assets/TPC_Branch.jpg";
import Column from "../../assets/TPC_Column.jpg";
import Goat from "../../assets/TPC_BancroftArch.jpg";
import Lake from "../../assets/TPC_Lake.jpg";

const photos = [
    {   id : 0,
        src: BancroftArch
    },
    {   id : 1,
        src: BancroftTower,
    },
    {   id : 2,
        src: Branch,
    },
    {   id : 3,
        src: Column,
    },
    {   id : 4,
        src: Goat,
    },
    {   id : 5,
        src: Lake,
    },
]

export default function PhotoClue () {

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <MenuBar></MenuBar>
                <ParagraphText title={"How to Play"} text={"The easiest way to play this game is to" +
                    " choose or take a photo with a clear layout, either with colors or values. Some have been" +
                    " provided below as a starting point, but any photo (or even drawing) can be used. Then, go out" +
                    " into the world and take a photo yourself that matches the colors or values (or both!) of the" +
                    " 'template' photo. You cannot lose this game--as long as you are happy with the result you have" +
                    " won."}></ParagraphText>
                <ParagraphText title={null} text={"Alternatively, you can play with other people anywhere in the world." +
                    " One person takes a photo where they are and sends it to the rest of the players. Then everyone" +
                    " else tries to find something to photograph to match the original photo. You cannot take a photo" +
                    " of the same subject, even if you know what it is and can reach it."}></ParagraphText>
                <ParagraphText title={"Starting Images"} text={""}></ParagraphText>
                <Spacer count={1}></Spacer>
                <ImageGrid imgSrc={photos}></ImageGrid>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
}