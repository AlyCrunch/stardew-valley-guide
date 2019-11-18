export type Item = {
    id: string,
    count: number,
    quality: number
}

export enum BundleColor {
    Blue,
    Green,
    Orange,
    Purple,
    Red,
    Teal,
    Yellow
}

export type Bundle = {
    id: string,
    icon: string,
    color: BundleColor,
    slots_count: number,
    items: Item[],
    reward: Item
}
