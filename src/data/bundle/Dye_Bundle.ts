import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Dye_Bundle.png";
const Dye: Bundle = {
    id: "Dye_Bundle",
    icon: Icon,
    color: BundleColor.Teal,
    slots_count: 6,
    items: [
        {
            id: "Red_Mushroom",
            count: 1,
            quality: 0
        },
        {
            id: "Sea_Urchin",
            count: 1,
            quality: 0
        },
        {
            id: "Sunflower",
            count: 1,
            quality: 0
        },
        {
            id: "Duck_Feather",
            count: 1,
            quality: 0
        },
        {
            id: "Aquamarine",
            count: 1,
            quality: 0
        },
        {
            id: "Red_Cabbage",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Seed_Maker",
        count: 1,
        quality: 0
    }
};
export default Dye;