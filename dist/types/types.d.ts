export declare enum directions {
    RIGHT = "right",
    LEFT = "left",
    RANDOM = "random"
}
export declare enum animations {
    SHOW = "show",
    HIDE = "hide",
    STAY = "stay"
}
export interface ITextShuffleProps {
    text: string;
    duration?: number;
    delay?: number;
    delayResolve?: number;
    fps?: number;
    glyphs?: string;
    animation?: animations;
    direction?: directions;
    onUpdate?: ((output: any) => void) | null;
    onComplete?: ((output: any) => void) | null;
}
