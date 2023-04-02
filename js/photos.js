const photos = document.querySelector('#images');
export const photoPreview = document.querySelector('.ad-form__photo');
const photosContainer = document.querySelector('.ad-form__photo-container');

const photoLoad = (files) => {
    const reader = new FileReader();
    const div = document.createElement('div');
    const photo = document.createElement('img');
    div.classList.add('ad-form__photo');
    div.classList.add('photo');
    reader.addEventListener('load', () => {
        photo.src = reader.result;
        div.append(photo);
        photosContainer.append(div);
    });
    if (files) return reader.readAsDataURL(files);
};

const photoImageLoad = (evt) => {
    const files = evt.target.files;
    for (let i = 0; i <= files.length; i++) {
        photoLoad(files[i]);
    }
};

photos.addEventListener('change', photoImageLoad, false);
