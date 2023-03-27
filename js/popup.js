import { types } from './constans.js';

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

export const getPopup = ({ offer, author }) => {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.popup__avatar').src = author.avatar;
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__type').textContent = types[offer.type];
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} кімнати для ${offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заїзд після ${offer.checkin}, виїзд до ${offer.checkout}`;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price} ₴/нічь`;
    features(offer.features, cardElement);
    cardElement.querySelector('.popup__description').textContent = offer.description;
    photos(offer.photos, cardElement);

    return cardElement;
}

const features = (features, cardElement) => {
    cardElement.querySelectorAll('.popup__feature').forEach((featureListItem) => {
        const isNecessary = features.some((feature) => featureListItem.classList.contains(`popup__feature--${feature}`));
        if (!isNecessary) featureListItem.remove();
    });
    feature(features, cardElement);
}

const feature = (features, cardElement) => {
    features.forEach((feature) => cardElement.querySelector(`.popup__feature--${feature}`).textContent = feature)
}
const photos = (photos, cardElement) => {
    const popupPhotosElement = cardElement.querySelector('.popup__photos');
    const popupPhotoElement = popupPhotosElement.querySelector('.popup__photo');
    popupPhotoElement.remove();
    if (photos.length > 0) {
        photos.forEach((photo) => {
            const item = popupPhotoElement.cloneNode(true);
            item.src = photo;
            cardElement.querySelector('.popup__photos').append(item);
        });
    } else return {};
}
