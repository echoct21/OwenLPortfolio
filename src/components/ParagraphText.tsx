import './Components.css'
import '../App.css'

interface textInfo {
    title: string | null;
    text: string;
}

function Title ({title}: {title: string | null}) {
    if (title === null) {
        return null
    } else {
        return <div className={"paragraph_title"}>{title}</div>
    }
}

export default function ParagraphText({
                           title,
                           text
                       }: textInfo) {

    return (
        <div className={"page_object"}>
            <div className={"paragraph"}>
                <Title title={title}></Title>
                <div className={"paragraph_text"}>{text}</div>
            </div>
        </div>
    )
};
