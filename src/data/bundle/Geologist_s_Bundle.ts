import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Geologist_s_Bundle.png";
const Geologist_s: Bundle = {
    id: "Geologist_s_Bundle",
    icon: Icon,
    color: BundleColor.Purple,
    slots_count: 4,
    items: [
        {
            id: "Quartz",
            count: 1,
            quality: 0
        },
        {
            id: "Earth_Crystal",
            count: 1,
            quality: 0
        },
        {
            id: "Frozen_Tear",
            count: 1,
            quality: 0
        },
        {
            id: "Fire_Quartz",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Omni_Geode",
        count: 5,
        quality: 0
    }
};
export default Geologist_s;