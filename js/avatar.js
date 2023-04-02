import { defaultAvatar } from './constans.js';

const avatar = document.querySelector('#avatar');
const preview = document.querySelector('.ad-form-header__preview');
export const avatarPreview = document.querySelector('.ad-form-header__preview img');
const avatarImg = preview.querySelector('img');

const avatarLoad = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => avatarImg.src = reader.result);
    if (file) reader.readAsDataURL(file);
    avatarImg.src = defaultAvatar;
};

const avatarImageLoad = (evt) => {
    const file = evt.target.files[0];
    avatarLoad(file);
};

avatar.addEventListener('change', avatarImageLoad, false);
