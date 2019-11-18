import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Exotic_Foraging_Bundle.png";
const Exotic_Foraging: Bundle = {
    id: "Exotic_Foraging_Bundle",
    icon: Icon,
    color: BundleColor.Purple,
    slots_count: 5,
    items: [
        {
            id: "Wood",
            count: 99,
            quality: 0
        },
        {
            id: "Wood",
            count: 99,
            quality: 0
        },
        {
            id: "Stone",
            count: 99,
            quality: 0
        },
        {
            id: "Hardwood",
            count: 10,
            quality: 0
        }
    ],
    reward: {
        id: "Autumn_s_Bounty",
        count: 1,
        quality: 0
    }
};
export default Exotic_Foraging;