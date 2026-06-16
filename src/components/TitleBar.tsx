import './Components.css'
import {Link} from "react-router-dom";
interface titleInfo {
    logo: string;
}
export default function TitleBar ({
                      logo,
                  }: titleInfo )  {

    return (
        <div className={"title"}>
            <div className={"title_image"}>
                <div className={"title_centered"}>
                    <Link to={"/"}>
                        <img className={"logo"} src={logo} alt={"Owen Lacey"}/>
                    </Link>
                </div>
            </div>
        </div>
    )
};
