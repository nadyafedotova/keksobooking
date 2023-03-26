import { onEscapeKey } from './utils.js';

const mainDocument = document.querySelector('body');
const submitButton = document.querySelector('.ad-form__submit');

export const message = (messageTemp, error = false) => {
    const templateElement = messageTemp.cloneNode(true);
    mainDocument.appendChild(templateElement);
    const onKeyDown = (evt) => {
        if (onEscapeKey(evt)) {
            evt.preventDefault();
            templateElement.remove();
            mainDocument.removeEventListener('keydown', onKeyDown);
            submitButton.disabled = false;
        }
    };

    mainDocument.addEventListener('keydown', onKeyDown);
    templateElement.tabIndex = 1;
    templateElement.focus();

    templateElement.addEventListener('click', () => {
        templateElement.remove();
        mainDocument.removeEventListener('keydown', onKeyDown);
        submitButton.disabled = false;
    });

    if (error) {
        const closeButton = templateElement.querySelector('[type="button"]');
        closeButton.focus();
        closeButton.addEventListener('click', () => {
            templateElement.remove();
            mainDocument.removeEventListener('keydown', onKeyDown);
            submitButton.disabled = false;
        });
    }
};
