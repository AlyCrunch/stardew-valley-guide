import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Adventurer_s_Bundle.png";
const Adventurer_s: Bundle = {
    id: "Adventurer_s_Bundle",
    icon: Icon,
    color: BundleColor.Purple,
    slots_count: 2,
    items: [
        {
            id: "Slime",
            count: 99,
            quality: 0
        },
        {
            id: "Bat_Wing",
            count: 10,
            quality: 0
        },
        {
            id: "Solar_Essence",
            count: 1,
            quality: 0
        },
        {
            id: "Void_Essence",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Small_Magnet_Ring",
        count: 1,
        quality: 0
    }
};
export default Adventurer_s;