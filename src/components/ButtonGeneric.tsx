import './Components.css'
import { Link } from "react-router-dom";

interface labelInfo {
    label: string;
    dest: string | object;
}
export default function ButtonGeneric ({
                           label,
                           dest,
                       }: labelInfo) {


    return (
        <Link to={dest}>
            <div className={"genericButton"} onClick={() => {window.scrollTo(0, 0);}}>
                {label}
            </div>
        </Link>
    )
};
