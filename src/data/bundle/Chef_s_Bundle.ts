import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Chef_s_Bundle.png";
const Chef_s: Bundle = {
    id: "Chef_s_Bundle",
    icon: Icon,
    color: BundleColor.Red,
    slots_count: 6,
    items: [
        {
            id: "Maple_Syrup",
            count: 1,
            quality: 0
        },
        {
            id: "Fiddlehead_Fern",
            count: 1,
            quality: 0
        },
        {
            id: "Truffle",
            count: 1,
            quality: 0
        },
        {
            id: "Poppy",
            count: 1,
            quality: 0
        },
        {
            id: "Maki_Roll",
            count: 1,
            quality: 0
        },
        {
            id: "Fried_Egg",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Pink_Cake",
        count: 3,
        quality: 0
    }
};
export default Chef_s;