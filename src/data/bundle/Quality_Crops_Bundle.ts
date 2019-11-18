import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Quality_Crops_Bundle.png";
const Quality_Crops: Bundle = {
    id: "Quality_Crops_Bundle",
    icon: Icon,
    color: BundleColor.Teal,
    slots_count: 4,
    items: [
        {
            id: "Parsnip",
            count: 5,
            quality: 2
        },
        {
            id: "Melon",
            count: 5,
            quality: 2
        },
        {
            id: "Pumpkin",
            count: 5,
            quality: 2
        },
        {
            id: "Corn",
            count: 5,
            quality: 2
        }
    ],
    reward: {
        id: "Preserves_Jar",
        count: 1,
        quality: 0
    }
};
export default Quality_Crops;