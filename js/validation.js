import { roomsGuests, typePrice } from './constans.js';
export const form = document.querySelector('.ad-form');
export const price = document.querySelector('#price');

const type = document.querySelector('#type');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const timeInOut = document.querySelector('.ad-form__element--time');

const typeValue = type.options[type.selectedIndex].value;
price.min = typePrice[typeValue];
price.placeholder = typePrice[typeValue];
capacity.value = roomsGuests[roomNumber.options[roomNumber.selectedIndex].value].toString();

export const pristine = window.Pristine(form, {
    classTo:'ad-form__element',
    errorClass:'ad-form__item--invalid',
    successClass:'ad-form__item--valid',
    errorTextParent:'ad-form__element',
    errorTextTag:'span',
    errorTextClass:'ad-form__error',
});

const validatePrice = (value) => value >= typePrice[type.value];
const getTypeErrorMessage = () => `Мінімальна ціна за ніч: ${typePrice[type.value]}`;
pristine.addValidator(price, validatePrice, getTypeErrorMessage);
const onTypeChange = () => {
    price.min = typePrice[type.value];
    price.placeholder = typePrice[type.value];
    if (price.value) pristine.validate(price);
};
type.addEventListener('change', onTypeChange);

const getRoomsErrorMessage = () => `Виберіть іншу кількість гостей!<br> 
        Для ${roomNumber.value} кімнат(и) кількість місць для ${roomsGuests[roomNumber.value]} гостя(ей)`;
const validateRooms = () => roomsGuests[roomNumber.value].includes(capacity.value);
pristine.addValidator(capacity, validateRooms, getRoomsErrorMessage);
roomNumber.addEventListener('change', () => pristine.validate(capacity));

const onTimeInOutChange = (evt) => timeIn.value = timeOut.value = evt.target.value;
timeInOut.addEventListener('change', onTimeInOutChange);
