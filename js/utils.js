export const onEscapeKey = (evt) => evt.key === 'Escape';

export const debounce = (callback, timeoutDelay) => {
    let timeoutId;
    return (...rest) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    };
};
