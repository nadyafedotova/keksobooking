export const getRandomNumber = (min, max) => {
    let minValue = Math.ceil(min);
    let maxValue = Math.ceil(max);
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

export const getRandomElement = (arr) => arr[getRandomNumber(0, arr.length - 1)];

export const getRandomFloat = (rangeMin, rangeMax, digits = 1) => {
    const minValue = Math.min(Math.abs(rangeMin), Math.abs(rangeMax));
    const maxValue = Math.max(Math.abs(rangeMin), Math.abs(rangeMax));
    return (minValue + Math.random() * (maxValue + 1 - maxValue)).toFixed(digits);
};