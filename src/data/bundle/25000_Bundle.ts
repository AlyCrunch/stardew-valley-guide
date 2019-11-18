import { Bundle, BundleColor } from "./_type";
import Icon from "./img/25000_Bundle.png";
const TwentyFiveK: Bundle = {
    id: "TwentyFiveK_Bundle",
    icon: Icon,
    color: BundleColor.Purple,
    slots_count: 1,
    items: [
        {
            id: "Gold",
            count: 25000,
            quality: 0
        }
    ],
    reward: {
        id: "Crystalarium",
        count: 1,
        quality: 0
    }
};
export default TwentyFiveK;