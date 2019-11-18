import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Enchanter_s_Bundle.png";
const Enchanter_s: Bundle = {
    id: "Enchanter_s_Bundle",
    icon: Icon,
    color: BundleColor.Purple,
    slots_count: 4,
    items: [
        {
            id: "Oak_Resin",
            count: 1,
            quality: 0
        },
        {
            id: "Wine",
            count: 1,
            quality: 0
        },
        {
            id: "Rabbit_s_Foot",
            count: 1,
            quality: 0
        },
        {
            id: "Pomegranate",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Gold_Bar",
        count: 5,
        quality: 0
    }
};
export default Enchanter_s;