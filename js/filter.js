import { defaultValue, priceRanges, types } from './constans.js';

const typeSelector = document.querySelector('#housing-type');
const priceSelector = document.querySelector('#housing-price');
const roomsFilter = document.querySelector('#housing-rooms');
const guestsFilter = document.querySelector('#housing-guests');

const getSelectCheckboxes = () => Array.from(document.querySelectorAll('input[name="features"]:checked')).map((cb) => cb.value);

const checkType = (obj, value) => value === types.any || value === obj.offer.type;
const checkPrice = (obj, price) => obj.offer.price <= priceRanges[price].maxPrice && obj.offer.price >= priceRanges[price].minPrice;
const checkRooms = (obj, value) => value === defaultValue || value === String(obj.offer.rooms);
const checkGuests = (obj, value) => value === defaultValue || value === String(obj.offer.guests);

const checkFeatures = (obj) => {
    const adFeatures = obj.offer.features;
    const selectFeatures = getSelectCheckboxes();
    if (selectFeatures.length === 0) return true;
    if (adFeatures) return selectFeatures.every((feature) => adFeatures.includes(feature));
    return false;
};

export const checkAllFilters = (object) => {
    const type = typeSelector.value;
    const price = priceSelector.value;
    const rooms = roomsFilter.value;
    const guests = guestsFilter.value;

    return checkType(object, type) && checkPrice(object, price) && checkRooms(object, rooms) && checkGuests(object, guests) && checkFeatures(object);
};
