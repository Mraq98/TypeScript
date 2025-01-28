declare module 'str-utils' {

    type StringManipulator = (input: string) => string;

    export const strReverse: StringManipulator;
    export const strToLower: StringManipulator;
    export const strToUpper: StringManipulator;
    export const strRandomize: StringManipulator;
    export const strInvertCase: StringManipulator;
}

