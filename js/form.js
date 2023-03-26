import { form, pristine } from './validation.js';
import { apiSendData } from './api.js';
import { getLocationToString, mainPinLocation, resetMainPinMarker } from './map.js';
import { digits, mainLocation } from './constans.js';
import { message } from './send_errors.js';
import { createOffer } from './data.js';

const submitButton = document.querySelector('.ad-form__submit');
const resetButton = document.querySelector('.ad-form__reset');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');

const resetForm = (evt) => {
    evt.preventDefault();
    pristine.reset();
    form.reset();
    mainPinLocation.value = getLocationToString(mainLocation, digits);
    resetMainPinMarker();
};

resetButton.addEventListener('click', (evt) => resetForm(evt));

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const valid = pristine.validate();
    const myFormData = new FormData(evt.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    formDataObj.features = myFormData.getAll('features');
    if (valid) {
        apiSendData(createOffer(formDataObj),
            () => resetForm(evt),
            () => message(successTemplate),
            () => message(errorTemplate, true)
        );
        submitButton.disabled = true;
    }
});
