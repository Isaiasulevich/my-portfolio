import Gallery from "next-gallery";
import masonryItems from "./jsondata/masonryItems.json";

const images = {masonryItems.map(obj,i)}

const widths = [ 500, 1000, 1600 ]
const ratios = [ 2.2, 4, 6, 8 ]

export default function Masonry() {
    return (
        <div>
        <Gallery {...images,widths,ratios} />
        </div>
    )
}