declare module 'stats' {
    type Comparator<T> = (a: T, b: T) => number;
    type Selector<T, R> = (item: T) => R;
    export function getMaxIndex<T>(input: T[], comparator: Comparator<T>): number;
    export function getMaxElement<T>(input: T[], comparator: Comparator<T>): T | null;
    export function getMinIndex<T>(input: T[], comparator: Comparator<T>): number;
    export function getMinElement<T>(input: T[], comparator: Comparator<T>): T | null;
    export function getMedianIndex<T>(input: T[], comparator: Comparator<T>): number;
    export function getMedianElement<T>(input: T[], comparator: Comparator<T>): T | null;
    export function getAverageValue<T, R>(input: T[], selector: Selector<T, R>): number;
}