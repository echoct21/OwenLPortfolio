import './Components.css'
import '../App.css'
import {Link} from "react-router-dom";

interface textInfo {
    imgSrc: string;
    alt: string;
    title: string;
    text: string;
    link?: string;
    target?: string;
}
export default function ImageLeft  ({
                       imgSrc,
                       alt,
                       title,
                       text,
                       link = "",
                       target = "_blank"
                   }: textInfo)  {

    return (
        <div className={"page_object"}>
            <div className={"image_box"}>
                <Link to={link} target={target} rel={"noopener noreferrer"}
                      onClick={() => {window.scrollTo(0, 0);}}>
                    <img className={"image_left_right"} src={imgSrc} alt={alt}/>
                </Link>
            </div>
            <div>
                <Link className={"link_style"} to={link} target={target}
                      rel={"noopener noreferrer"}
                      onClick={() => {window.scrollTo(0, 0);}}>
                    <div className={"text_title"}>{title}</div>
                </Link>
                <div className={"text_image_left"}>{text}</div>
            </div>
        </div>
    )
};
