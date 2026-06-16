import './Components.css'

interface labelInfo {
    label: string;
}
export default function ButtonPageNav({
                           label,
                       }: labelInfo) {

    return (
        <div className={"navButton"}>
            {label}
        </div>
    )
}