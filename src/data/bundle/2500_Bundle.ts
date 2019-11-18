import { Bundle, BundleColor } from "./_type";
import Icon from "./img/2500_Bundle.png";
const TwoKFive: Bundle = {
    id: "TwoKFive_Bundle",
    icon: Icon,
    color: BundleColor.Red,
    slots_count: 1,
    items: [
        {
            id: "Gold",
            count: 2500,
            quality: 0
        }
    ],
    reward: {
        id: "Chocolate_Cake",
        count: 3,
        quality: 0
    }
};
export default TwoKFive;