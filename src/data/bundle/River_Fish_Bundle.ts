import { Bundle, BundleColor } from "./_type";
import Icon from "./img/River_Fish_Bundle.png";
const River_Fish: Bundle = {
    id: "River_Fish_Bundle",
    icon: Icon,
    color: BundleColor.Teal,
    slots_count: 4,
    items: [
        {
            id: "Sunfish",
            count: 1,
            quality: 0
        },
        {
            id: "Catfish",
            count: 1,
            quality: 0
        },
        {
            id: "Shad",
            count: 1,
            quality: 0
        },
        {
            id: "Tiger_Trout",
            count: 10,
            quality: 0
        }
    ],
    reward: {
        id: "Bait",
        count: 30,
        quality: 0
    }
};
export default River_Fish;