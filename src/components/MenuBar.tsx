import './Components.css'
import ButtonGeneric from "./ButtonGeneric";

export default function MenuBar () {

    return (
        <div className={"menu_box"}>
            <div className={"menu"}>
                <ButtonGeneric label={"Home"} dest={"/"}></ButtonGeneric>
                <ButtonGeneric label={"Game Design"} dest={"/gamedesign"}></ButtonGeneric>
                <ButtonGeneric label={"Writing"} dest={"/writing"}></ButtonGeneric>
                <ButtonGeneric label={"Visual Art"} dest={"/visualart"}></ButtonGeneric>
            </div>
        </div>
    )
};