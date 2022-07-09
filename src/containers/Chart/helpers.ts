import {IChartLineExtended} from "./types";

export const countLeftIndent = (arr: Array<IChartLineExtended>, index: number): number => {
    let leftIndent = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i === index) break;
        leftIndent += arr[i].width;
    }

    return leftIndent;
}

export const countWidth = (lineTime: number, totalTime: number): number => {
    return Math.fround((lineTime * 100) / totalTime);
}

export const getRandomNumber = (max = 100) => {
    return +((Math.random() * max) + 1).toFixed(1)
}