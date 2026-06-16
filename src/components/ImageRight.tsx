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
export default function ImageRight  ({
                        imgSrc,
                        alt,
                        title,
                        text,
                        link = "",
                        target = "_blank",
                    }: textInfo)  {

    return (
        <div className={"page_object"}>
            <div>
                <Link className={"link_style"} to={link} target={target} rel={"noopener noreferrer"} onClick={() => {window.scrollTo(0, 0);}}>
                    <div className={"text_title"}>{title}</div>
                </Link>
                <div className={"text_image_right"}>{text}</div>
            </div>
            <div className={"image_box"}>
                <Link to={link} target={target} rel={"noopener noreferrer"} onClick={() => {window.scrollTo(0, 0);}}>
                    <img src={imgSrc} alt={alt} className={"image_left_right"}/>
                </Link>
            </div>
        </div>
    )
};