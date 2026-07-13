import './App.css';
import TitleBar from "./components/TitleBar";
import ImageLeft from "./components/ImageLeft";
import ImageRight from "./components/ImageRight";
import Name from "./assets/Name.png"
import Island from "./assets/Owen_L_Color_Exterior1_V04_Oct8.png"
import Castle from "./assets/Castle.png"
import Footer from "./components/Footer";
import MenuBar from "./components/MenuBar";
import ParagraphText from "./components/ParagraphText.tsx";

function App() {
  return (
      <div className="App">
        <TitleBar  logo={Name}></TitleBar>
        <div className={"page_content"}>
          <MenuBar></MenuBar>
          <ImageLeft imgSrc={Island} alt={"Concept art of submarine construction on an island."} title={"About Me"}
                     text={"Hi! I'm a game designer and writer from California. I like making short narrative games " +
                         "and text based adventures, along with 2d games. I also work with escape room and LARP puzzle " +
                         "design and mechanics, trying to run short games and experiment with new game styles. I have a " +
                         "BA in Game Design and a BS in Professional Writing from Worcester Polytechnic Institute. I've " +
                         "been playing games since I was 10 years old and have always been experimenting with designing " +
                         "my own levels and gameplay."}
                     target={""}
          ></ImageLeft>
            <ParagraphText title={"Favorite Projects"} text={"My favorite projects have been my game design work in" +
                " Minecraft. It lets me work in an environment I know well, and make something fully interactive using" +
                " only the systems provided by the game. My current Minecraft game is probably my favorite project I've" +
                " worked on as it includes both the best level design of an area and the best in-game coding I've made." +
                " I have also really enjoyed my work on a few board games I've been designing, one inspired by the Forbidden" +
                " Desert series, and one by the game Dredge. Both of those prototypes can be found the Game Design page."}></ParagraphText>
          <ImageRight imgSrc={Castle} alt={"An image of the game."} title={"Current Project"} text={"Currently I'm working on a Minecraft short" +
              " game. It is based on early Minecraft adventure maps and uses both redstone mechanics and commmand blocks" +
              " to create a fully playable game. My goal is to have it be a fully vanilla experience that feels like a real " +
              "RPG game. It will include a fully complete reset feature, allowing the entire game to be set up with just " +
              "a single press of a button, as well as custom designed weapon and spell abilities."} target={""}></ImageRight>
        </div>
        <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
      </div>
  );
}

export default App;
