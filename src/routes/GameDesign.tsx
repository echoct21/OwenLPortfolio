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
                    "A DSLR will allow for the best results, but it can be played with a small digital camera, a phone " +
                    "camera, or even a film camera. To play, you must select a photo or pattern to use, then " +
                    "use your camera to take a photo that has the same composition of values and colors.\n " +
                    "There is no objective “victory” in this game, each player or group of players must judge for " +
                    "themselves what counts as a match." +
                    " The only requirement to start playing is a pattern image. You can either take one yourself, or find a" +
                    " layout/color pallete you want to imitate, and start taking photos!"} link={"photoclue"} target={""}></ImageLeft>
                <ImageLeft imgSrc={ShadowDepth} alt={"The title screen of Shadowed Depths"} title={"Shadowed Depths"}
                           text={"A short dungeon crawler game made in Perlenspiel, with a 16x16 \"bead\" grid. The player " +
                               "cannot see far beyond their own location, and must evade enemies in the dark and navigate " +
                               "a twisting dungeon to reach the treasure at the end.\n" +
                               "The game was designed with certain restrictions imposed: the game cannot have any color and it must " +
                               "be 16x16 \"beads\" in size."} link={"https://echoct21.github.io/GitHub/2900/A39/game.html"} ></ImageLeft>
                <ImageLeft imgSrc={Alien} alt={"Alien Adventure Logo"} title={"Alien Adventure"} text={"A 2D adventure" +
                    " game made in the game engine Dragonfly. It is a simple adventure game where you explore a small " +
                    "map to find a golden egg and return to your ship. Along the way you have to defeat or escape various alien creatures " +
                    "trying to eat you. Programming by me, ASCII art by Jay Weil."}
                           link={"https://agaricspot.itch.io/alien-adventure"}></ImageLeft>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
}