import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Ocean_Fish_Bundle.png";
const Ocean_Fish: Bundle = {
    id: "Ocean_Fish_Bundle",
    icon: Icon,
    color: BundleColor.Blue,
    slots_count: 4,
    items: [
        {
            id: "Largemouth_Bass",
            count: 1,
            quality: 0
        },
        {
            id: "Carp",
            count: 1,
            quality: 0
        },
        {
            id: "Bullhead",
            count: 1,
            quality: 0
        },
        {
            id: "Sturgeon",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Warp_Totem_Beach",
        count: 5,
        quality: 0
    }
};
export default Ocean_Fish;