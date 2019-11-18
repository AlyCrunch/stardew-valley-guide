import { Bundle, BundleColor } from "./_type";
import Icon from "./img/Spring_Foraging_Bundle.png";
const Spring_Foraging: Bundle = {
    id: "Spring_Foraging_Bundle",
    icon: Icon,
    color: BundleColor.Green,
    slots_count: 4,
    items: [
        {
            id: "Wild_Horseradish",
            count: 1,
            quality: 0
        },
        {
            id: "Daffodil",
            count: 1,
            quality: 0
        },
        {
            id: "Leek",
            count: 1,
            quality: 0
        },
        {
            id: "Dandelion",
            count: 1,
            quality: 0
        }
    ],
    reward: {
        id: "Spring_Seeds",
        count: 30,
        quality: 0
    }
};
export default Spring_Foraging