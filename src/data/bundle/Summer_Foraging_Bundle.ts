import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Summer_Foraging_Bundle.png";
const Summer_Foraging: Bundle = {
    id: "Summer_Foraging",
    icon: Icon,
    color: BundleColor.Yellow,
    slots_count: 4,
    items: [
        {
            id: "Common_Mushroom",
            count: 1,
            quality: 0
        },
        {
            id: "Wild_Plum",
            count: 1,
            quality: 0
        },
        {
            id: "Hazelnut",
            count: 1,
            quality: 0
        },
        {
            id: "Blackberry",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Fall_Seeds",
        count: 30,
        quality: 0
    }
};
export default Summer_Foraging;