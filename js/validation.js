import { typePrice } from './constans.js';
const form = document.querySelector('.ad-form');
export const price = document.querySelector('#price');

const type = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const timeInOut = document.querySelector('.ad-form__element--time');

export const pristine = window.Pristine(form, {
    classTo:'ad-form__element',
    errorClass:'ad-form__item--invalid',
    successClass:'ad-form__item--valid',
    errorTextParent:'ad-form__element',
    errorTextTag:'span',
    errorTextClass:'ad-form__error',
});

const validatePrice = (value) => value >= typePrice[type.value];
pristine.addValidator(price, validatePrice,);

const onTypeChange = () => {
    price.min = typePrice[type.value];
    price.placeholder = typePrice[type.value];
    if (price.value) pristine.validate(price);
};
type.addEventListener('change', onTypeChange);
roomNumber.addEventListener('change', () => pristine.validate(capacity));

const onTimeInOutChange = (evt) => timeIn.value = timeOut.value = evt.target.value;
timeInOut.addEventListener('change', onTimeInOutChange);