import { features } from './constans.js';

export const getRandomNumber = (min, max) => {
    let minValue = Math.ceil(min);
    let maxValue = Math.ceil(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

export const getRandomElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];

export const getRandomFloat = (rangeMin, rangeMax, digits = 1) => {
    return (Math.random() * (rangeMax - rangeMin) + rangeMin).toFixed(digits);
};

export const getRandomFeatures = () => features.slice(getRandomNumber(0, features.length - 1));