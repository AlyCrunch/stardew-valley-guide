import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Night_Fishing_Bundle.png";
const Night_Fishing: Bundle = {
    id: "Night_Fishing_Bundle",
    icon: Icon,
    color: BundleColor.Purple,
    slots_count: 3,
    items: [
        {
            id: "Walleye",
            count: 1,
            quality: 0
        },
        {
            id: "Bream",
            count: 1,
            quality: 0
        },
        {
            id: "Eel",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Small_Glow_Ring",
        count: 1,
        quality: 0
    }
};
export default Night_Fishing;