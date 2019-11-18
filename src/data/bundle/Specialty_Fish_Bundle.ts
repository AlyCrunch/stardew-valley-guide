import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Specialty_Fish_Bundle.png";
const Specialty_Fish: Bundle = {
    id: "Specialty_Fish_Bundle",
    icon: Icon,
    color: BundleColor.Red,
    slots_count: 4,
    items: [
        {
            id: "Pufferfish",
            count: 1,
            quality: 0
        },
        {
            id: "Ghostfish",
            count: 1,
            quality: 0
        },
        {
            id: "Sandfish",
            count: 1,
            quality: 0
        },
        {
            id: "Woodskip",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Dish_o_The_Sea",
        count: 5,
        quality: 0
    }
};
export default Specialty_Fish;