import './Components.css'
import '../App.css'


type I_id = number;
type I_src = string;

export type imgInfo = {
    id: I_id,
    src: I_src,
}

interface images {
    imgSrc: imgInfo[];
}
export default function ImageGrid ({
                       imgSrc,
                   }: images) {


    const gridImage = imgSrc.map(photo =>
        <img key={photo.id} className={"grid_image"} src={photo.src} alt={""}/>
    );

    return (
        <div className={"page_object"}>
            <div className={"image_grid"}>
                {gridImage}
            </div>
        </div>
    )
};