import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Summer_Foraging_Bundle.png";
const Summer_Foraging: Bundle = {
    id: "Summer_Foraging_Bundle",
    icon: Icon,
    color: BundleColor.Orange,
    slots_count: 3,
    items: [
        {
            id: "Grape",
            count: 1,
            quality: 0
        },
        {
            id: "Spice_Berry",
            count: 1,
            quality: 0
        },
        {
            id: "Sweet_Pea",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Summer_Seeds",
        count: 30,
        quality: 0
    }
};
export default Summer_Foraging;