import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Construction_Bundle.png";
const Construction: Bundle = {
    id: "Construction_Bundle",
    icon: Icon,
    color: BundleColor.Red,
    slots_count: 4,
    items: [
        {
            id: "Wood",
            count: 99,
            quality: 0
        },
        {
            id: "Wood",
            count: 99,
            quality: 0
        },
        {
            id: "Stone",
            count: 99,
            quality: 0
        },
        {
            id: "Hardwood",
            count: 10,
            quality: 0
        }
    ],
    reward: {
        id: "Charcoal_Kiln",
        count: 1,
        quality: 0
    }
};
export default Construction;