import './Components.css'
import '../App.css'
import {Link} from "react-router-dom";

interface textInfo {
    img1Src: string;
    img2Src: string;
    alt1: string;
    alt2: string;
    title1: string;
    title2: string;
    link1?: string | object;
    link2?: string | object;
}
export default function DoubleImage ({
                         img1Src,
                         img2Src,
                         alt1,
                         alt2,
                         title1,
                         title2,
                         link1 = {},
                         link2 = {},
                     }: textInfo) {

    return (
        <div className={"page_object"}>
            <div className={"double_image_container"}>


                <div className={"double_image_item"}>
                    <Link className={"link_style"} to={link1}>
                        <div className={"text_title"}>{title1}</div>
                    </Link>
                    <Link className={"link_style"} to={link1}>
                        <img src={img1Src} alt={alt1} className={"double_image"}/>
                    </Link>
                </div>
                <div className={"double_image_item"}>
                    <Link className={"link_style"} to={link2}>
                        <div className={"text_title"}>{title2}</div>
                    </Link>
                    <Link className={"link_style"} to={link2}>
                        <img src={img2Src} alt={alt2} className={"double_image"}/>
                    </Link>
                </div>
            </div>
        </div>
    )
};