import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Spring_Crops_Bundle.png";
const Spring_Crops: Bundle = {
    id: "Spring_Crops_Bundle",
    icon: Icon,
    color: BundleColor.Green,
    slots_count: 4,
    items: [
        {
            id: "Parsnip",
            count: 1,
            quality: 0
        },
        {
            id: "Green_Bean",
            count: 1,
            quality: 0
        },
        {
            id: "Cauliflower",
            count: 1,
            quality: 0
        },
        {
            id: "Potato",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Speed-Gro",
        count: 20,
        quality: 0
    }
};
export default Spring_Crops;