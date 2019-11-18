import { Bundle, BundleColor } from "./_type";
import Icon from "./img/5000_Bundle.png";
const FiveK: Bundle = {
    id: "FiveK_Bundle",
    icon: Icon,
    color: BundleColor.Orange,
    slots_count: 1,
    items: [
        {
            id: "Gold",
            count: 5000,
            quality: 0
        }
    ],
    reward: {
        id: "Quality_Fertilizer",
        count: 30,
        quality: 0
    }
};
export default FiveK;