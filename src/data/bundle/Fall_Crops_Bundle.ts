import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Fall_Crops_Bundle.png";
const Fall_Crops: Bundle = {
    id: "Fall_Crops_Bundle",
    icon: Icon,
    color: BundleColor.Orange,
    slots_count: 4,
    items: [
        {
            id: "Corn",
            count: 1,
            quality: 0
        },
        {
            id: "Eggplant",
            count: 1,
            quality: 0
        },
        {
            id: "Pumpkin",
            count: 1,
            quality: 0
        },
        {
            id: "Yam",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Bee_House ",
        count: 1,
        quality: 0
    }
};
export default Fall_Crops;