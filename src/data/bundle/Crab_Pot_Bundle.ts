import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Crab_Pot_Bundle.png";
const Crab_Pot: Bundle = {
    id: "Crab_Pot_Bundle",
    icon: Icon,
    color: BundleColor.Purple,
    slots_count: 5,
    items: [
        {
            id: "Lobster",
            count: 1,
            quality: 0
        },
        {
            id: "Crayfish",
            count: 1,
            quality: 0
        },
        {
            id: "Crab",
            count: 1,
            quality: 0
        },
        {
            id: "Cockle",
            count: 1,
            quality: 0
        },
        {
            id: "Mussel",
            count: 1,
            quality: 0
        },
        {
            id: "Shrimp",
            count: 1,
            quality: 0
        },
        {
            id: "Snail",
            count: 1,
            quality: 0
        },
        {
            id: "Periwinkle",
            count: 1,
            quality: 0
        },
        {
            id: "Oyster",
            count: 1,
            quality: 0
        },
        {
            id: "Clam",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Crab_Pot",
        count: 3,
        quality: 0
    }
};
export default Crab_Pot;