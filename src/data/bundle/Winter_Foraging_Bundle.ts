import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Winter_Foraging_Bundle.png";
const Winter_Foraging: Bundle = {
    id: "Winter_Foraging_Bundle",
    icon: Icon,
    color: BundleColor.Teal,
    slots_count: 4,
    items: [
        {
            id: "Winter_Root",
            count: 1,
            quality: 0
        },
        {
            id: "Crystal_Fruit",
            count: 1,
            quality: 0
        },
        {
            id: "Snow_Yam",
            count: 1,
            quality: 0
        },
        {
            id: "Crocus",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Winter_Seeds",
        count: 30,
        quality: 0
    }
};
export default Winter_Foraging;