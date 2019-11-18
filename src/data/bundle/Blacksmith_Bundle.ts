import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Blacksmith_Bundle.png";
const Blacksmith: Bundle = {
    id: "Blacksmith_Bundle",
    icon: Icon,
    color: BundleColor.Orange,
    slots_count: 3,
    items: [
        {
            id: "Copper_Bar",
            count: 1,
            quality: 0
        },
        {
            id: "Iron_Bar",
            count: 1,
            quality: 0
        },
        {
            id: "Gold_Bar",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Furnace",
        count: 1,
        quality: 0
    }
};
export default Blacksmith;