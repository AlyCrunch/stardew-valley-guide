import { Bundle, BundleColor } from "./_type";
import Icon from "./img/10000_Bundle.png";
const TenK: Bundle = {
    id: "TenK_Bundle",
    icon: Icon,
    color: BundleColor.Yellow,
    slots_count: 1,
    items: [
        {
            id: "Gold",
            count: 10000,
            quality: 0
        }
    ],
    reward: {
        id: "Lightning_Rod",
        count: 1,
        quality: 0
    }
};
export default TenK;