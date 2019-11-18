import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Fodder_Bundle.png";
const Fodder: Bundle = {
    id: "Fodder_Bundle",
    icon: Icon,
    color: BundleColor.Yellow,
    slots_count: 3,
    items: [
        {
            id: "Wheat",
            count: 10,
            quality: 0
        },
        {
            id: "Hay",
            count: 10,
            quality: 0
        },
        {
            id: "Apple",
            count: 3,
            quality: 0
        }
    ],
    reward: {
        id: "Heater",
        count: 1,
        quality: 0
    }
};
export default Fodder;