import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Animal_Bundle.png";
const Animal: Bundle = {
    id: "Animal_Bundle",
    icon: Icon,
    color: BundleColor.Red,
    slots_count: 5,
    items: [
        {
            id: "Large_Milk",
            count: 1,
            quality: 0
        },
        {
            id: "Large_Brown_Egg",
            count: 1,
            quality: 0
        },
        {
            id: "Large_Egg",
            count: 1,
            quality: 0
        },
        {
            id: "Large_Goat_Milk",
            count: 1,
            quality: 0
        },
        {
            id: "Wool",
            count: 1,
            quality: 0
        },
        {
            id: "Duck_Egg",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Cheese_Press",
        count: 1,
        quality: 0
    }
};
export default Animal;