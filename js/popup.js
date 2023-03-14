const fragment = new DocumentFragment();
const cardTemplate = document.querySelector('#card');

export const getPopup = (data) => {
    data.forEach((item) => {
        const cardElement = cardTemplate.content.cloneNode(true);
        cardElement.querySelector('.popup__avatar').src = item.author.avatar;
        cardElement.querySelector('.popup__title').textContent = item.offer.title;
        cardElement.querySelector('.popup__text--address').textContent = item.offer.address;
        cardElement.querySelector('.popup__type').textContent = item.offer.type;
        cardElement.querySelector('.popup__text--capacity').textContent = `${item.offer.rooms} кімнати для ${item.offer.guests} гостей`;
        cardElement.querySelector('.popup__text--time').textContent = `Заїзд після ${item.offer.checkin}, виїзд до ${item.offer.checkout}`;
        cardElement.querySelector('.popup__text--price').textContent = item.offer.price;
        cardElement.querySelectorAll('.popup__feature').forEach((featureListItem) => {
            const isNecessary = item.offer.features.some((feature) => featureListItem.classList.contains(`popup__feature--${feature}`));
            if (!isNecessary) featureListItem.remove();
        });

        item.offer.features.forEach((feature) =>  cardElement.querySelector(`.popup__feature--${feature}`).textContent = feature)
        cardElement.querySelector('.popup__description').textContent = item.offer.description;
        const popupPhotosElement = cardElement.querySelector('.popup__photos');
        const popupPhotoElement = popupPhotosElement.querySelector('.popup__photo');
        item.offer.photos.forEach((photo) => {
            const item = popupPhotoElement.cloneNode(true);
            item.src = photo;
            cardElement.querySelector(".popup__photos").append(item);
        });
        fragment.appendChild(cardElement);
    })
    cardTemplate.appendChild(fragment);
}