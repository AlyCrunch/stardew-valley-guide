import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Summer_Crops_Bundle.png";
const Summer_Crops: Bundle = {
    id: "Summer_Crops_Bundle",
    icon: Icon,
    color: BundleColor.Yellow,
    slots_count: 4,
    items: [
        {
            id: "Tomato",
            count: 1,
            quality: 0
        },
        {
            id: "Hot_Pepper",
            count: 1,
            quality: 0
        },
        {
            id: "Blueberry",
            count: 1,
            quality: 0
        },
        {
            id: "Melon",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Quality_Sprinkler",
        count: 1,
        quality: 0
    }
};
export default Summer_Crops;