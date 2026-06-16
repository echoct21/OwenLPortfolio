import "../App.css";
import DnD from "../assets/LordOfSilurum.png";
import MobyDick from "../assets/ImbalanceOfAHead.png";
import TitleBar from "../components/TitleBar";
import ParagraphText from "../components/ParagraphText";
import DoubleImagePage from "../components/DoubleImagePage";
import Name from "../assets/Name.png";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import Spacer from "../components/Spacer";
import WritingList from "../components/WritingList";
import type {writingInfo} from "../components/WritingList";

export default function Writing () {

    const projectList : writingInfo[] = [{
        id: 0,
        title: "The Iron Crown",
        quote: "Despite the ragged clothes on the statue, an iron crown rested on its head, " +
            " as if this was not a visage of a commoner, but of a king.",
        description: "Initially a short exploration of horror and unease, this started to expand into a longer story." +
            " I haven't continued it past this point, but it could be a slightly longer piece eventually. This version is" +
            " written in first person while the original, which is included as well, was in second person.",
        link: "stories",
        state: "IronCrown",
    }, {
        id: 1,
        title: "Major Qualifying Project",
        quote: "LARP has the chance to have much deeper worlds and stories—as long as players " +
            " are able to see those worlds and stories.",
        description: "My Major Qualifying Project at WPI was a study of worldbuilding in LARP games and how to best convey" +
            " that worldbuilding to players. As part of the project I ran a two hour quest experimenting with storytelling" +
            " and worldbuilding techniques.",
        link: "stories",
        state: "MQP",
    }, {
        id: 2,
        title: "Shadowed Binding",
        quote: "The shadow took her mind and made it its own. Her thoughts, its thoughts; her actions, its actions.",
        description: "A short story set in the Witcher world after the games where Ciri investigates a posession among" +
            " the priest of the Eternal Flame. The story started as a writing exercise and I liked it enough to continue.",
        link: "stories",
        state: "ShadowedBinding",
    }]

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <MenuBar></MenuBar>
                <ParagraphText title={"Writing Projects"} text={"This is a set of my best writing work." +
                    " It includes a short story, a Dungeons and Dragons adventure, and a few pieces written for" +
                    " school. One of those is a fake Moby Dick chapter written to mimic Herman Melville's style" +
                    " and themes. Below are design documents for LARP games I have/plan to run."}></ParagraphText>

                <DoubleImagePage img1Src={DnD} img2Src={MobyDick} alt1={"The first page of a DnD adventure"}
                                 alt2={"The first page of a fake Moby Dick chapter."}
                                 title1={"A Dungeons and Dragons " +
                                     "One-Shot"} title2={"The first page of a fake Moby Dick chapter."}
                                 link1={"dndadventure"}
                                 link2={"mobydick"}></DoubleImagePage>
                <Spacer count={1}></Spacer>
                <WritingList data={projectList}></WritingList>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
}