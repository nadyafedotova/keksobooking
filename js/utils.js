import { avatarPreview } from './avatar.js';
import { photoPreview } from './photos.js';
import { defaultAvatar } from './constans.js';

export const onEscapeKey = (evt) => evt.key === 'Escape';

export const debounce = (callback, timeoutDelay) => {
    let timeoutId;
    return (...rest) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
    };
};

export const resetPhotos = () => {
    avatarPreview.src = defaultAvatar;
    photoPreview.innerHTML = '';
}
