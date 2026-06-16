import './Components.css'
import '../App.css'
import {Link} from "react-router-dom";

type W_id = number;
type W_title = string;
type W_quote = string;
type W_description = string;
type W_link = string | object;
type W_state = string;

export type writingInfo = {
    id: W_id,
    title: W_title,
    quote: W_quote,
    description: W_description,
    link: W_link
    state?: W_state
}


interface textInfo {
    data : writingInfo[]
}

export default function WritingList ({
                         data
                     }: textInfo) {

    const listItems = data.map(project =>
        <li className={"writing_item"} key={project.id}>
            <div className={"writing_title"}>
                <Link className={"link_style"} to={project.link} state={project.state} onClick={() => {window.scrollTo(0, 0);}}><p >{project.title}</p></Link>
            </div>
            <div className={"writing_text"}>
                <p className={"writing_quote"}>"{project.quote}"</p>
                <p className={"paragraph_text"}>{project.description}</p>
            </div>
        </li>
    );

    return (
        <div className={"page_object"}>
            <ul>{listItems}</ul>
        </div>
    )
};
