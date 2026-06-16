import "../../App.css";
import TitleBar from "../../components/TitleBar";
import Name from "../../assets/Name.png";
import MenuBar from "../../components/MenuBar";
import {useState} from "react";
import ButtonGeneric from "../../components/ButtonGeneric";
import Footer from "../../components/Footer";
import ButtonPageNav from "../../components/ButtonPageNav";
import {useLocation} from "react-router-dom";

const IronCrown : string = '../TheIronCrown.html'
const ShadowedBinding : string = '../TheShadowedBinding.html'
const MQP : string = '../WorldbuildingInLARP.pdf'
const None : string = '../NoSelection.html'

function DocFrame({doc}: {doc : string}){
    switch (doc) {
        case "IronCrown":
            return <iframe className={"story_frame"} src={IronCrown} title={"The Iron Crown"}></iframe>
        case "ShadowedBinding":
            return <iframe className={"story_frame"} src={ShadowedBinding} title={"The Shadowed Binding"}></iframe>
        case "MQP":
            return <iframe className={"story_frame"} src={MQP} title={"Worldbuilding in LARP"}></iframe>
        default:
            console.log("No page found.");
            return <iframe className={"story_frame"} src={None} title={"No Story Selected."}></iframe>
    }
}

export default function StoryPage () {
    const location = useLocation();

    const[story, setStory] = useState(location.state);

    function selectStory(story :string){
        setStory(story);
    }

    return (
        <div className={"App"}>
            <TitleBar  logo={Name}></TitleBar>
            <div className={"page_content"}>
                <MenuBar></MenuBar>
                <div className={"page_object"}>
                    <ButtonGeneric label={"Back"} dest={"/writing"}></ButtonGeneric>
                </div>
                <div className={"page_object story_display"}>
                    <div className={"story_nav"}>
                        <p className={"nav_title"}>Writing Works</p>
                        <div onClick={() => selectStory("IronCrown")}>
                            <ButtonPageNav label={"The Iron Crown"}></ButtonPageNav>
                        </div>
                        <div onClick={() => selectStory("ShadowedBinding")}>
                            <ButtonPageNav label={"The Shadowed Binding"}></ButtonPageNav>
                        </div>
                        <div onClick={() => selectStory("MQP")}>
                            <ButtonPageNav label={"Major Qualifying Project"}></ButtonPageNav>
                        </div>
                    </div>
                    <DocFrame doc={story}/>
                </div>
            </div>
            <Footer imgSrc={Name} alt={"Name Logo"}></Footer>
        </div>
    )
}