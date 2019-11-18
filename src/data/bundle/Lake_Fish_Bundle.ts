import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Lake_Fish_Bundle.png";
const Lake_Fish: Bundle = {
    id: "Lake_Fish_Bundle",
    icon: Icon,
    color: BundleColor.Green,
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
            count: 10,
            quality: 0
        }
    ],
    reward: {
        id: "Dressed_Spinner",
        count: 1,
        quality: 0
    }
};
export default Lake_Fish;