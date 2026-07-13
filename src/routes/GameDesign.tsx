import "../App.css";
import TitleBar from "../components/TitleBar";
import ImageLeft from "../components/ImageLeft";
import PhotoClue from "../assets/TPC_Goat.jpg"
import ShadowDepth from "../assets/ShadowedDepths.png"
import Alien from "../assets/AlienAdventure.png"
import Name from "../assets/Name.png";
import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";

export default function GameDesign () {

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <MenuBar></MenuBar>
                <ImageLeft imgSrc={PhotoClue} alt={"A silhouette of a goat statue against a white sky. "}
                           title={"The Photographer's Clue"} text={"To play this game, all you need is a camera. " +
                    " You must select a photo or pattern to use, then " +
                    "use your camera to take a photo that has the same composition of values and colors.\n " +
                    "There is no objective “victory” in this game, each player or group of players must judge for " +
                    "themselves what counts as a match." +
                    " The only requirement to start playing is a pattern image. You can either take one yourself, or find a" +
                    " layout/color pallete you want to imitate, and start taking photos!" +
                    " This was an enjoyable design challenge to make a game using a non-traditional input device. I chose" +
                    " a camera because I have always enjoyed photography and trying to find a pretty scene from anywhere" +
                    " you are."} link={"photoclue"} target={""}></ImageLeft>
                <ImageLeft imgSrc={ShadowDepth} alt={"The title screen of Shadowed Depths"} title={"Shadowed Depths"}
                           text={"A short dungeon crawler game made in Perlenspiel, with a 16x16 \"bead\" grid. The player " +
                               "cannot see far beyond their own location, and must evade enemies in the dark and navigate " +
                               "a twisting dungeon to reach the treasure at the end. The game was designed with certain " +
                               "restrictions imposed: the game cannot have any color and it must " +
                               "be 16x16 \"beads\" in size." +
                               "The game will let you see each level fully lit before starting to move. Move with the arrow keys" +
                               " and attack any adjacent enemies with space. If you touch an enemy you will lose one life. Reach the" +
                               " light gray exit spaces to move to the next level." +
                               " This was my first real programmed game project and I loved how the limitations forced me" +
                               " to reconsider what was needed to make a complete game."} link={"https://echoct21.github.io/GitHub/2900/A39/game.html"} ></ImageLeft>
                <ImageLeft imgSrc={Alien} alt={"Alien Adventure Logo"} title={"Alien Adventure"} text={"A 2D adventure" +
                    " game made in the game engine Dragonfly. It is a simple adventure game where you explore a small " +
                    "map to find a golden egg and return to your ship. Along the way you have to defeat or escape various alien creatures " +
                    "trying to eat you. Programming by me, ASCII art by Jay Weil. This project was largely an experiment in" +
                    " making a game engine for the first time and it really helped me learn what the engine does to support" +
                    " game design as a process."}
                           link={"https://agaricspot.itch.io/alien-adventure"}></ImageLeft>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
}