import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Field_Research_Bundle.png";
const Field_Research: Bundle = {
    id: "Field_Research_Bundle",
    icon: Icon,
    color: BundleColor.Blue,
    slots_count: 4,
    items: [
        {
            id: "Purple_Mushroom",
            count: 1,
            quality: 0
        },
        {
            id: "Nautilus_Shell",
            count: 1,
            quality: 0
        },
        {
            id: "Chub",
            count: 1,
            quality: 0
        },
        {
            id: "Frozen_Geode",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Recycling_Machine",
        count: 1,
        quality: 0
    }
};
export default Field_Research;