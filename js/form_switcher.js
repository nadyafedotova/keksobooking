const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const formFieldsets = adForm.querySelectorAll('fieldset');
const mapFilterFieldsets = mapFilter.querySelectorAll('fieldset');
const mapFilterSelects = mapFilter.querySelectorAll('select');

export const disableForm = (isDisabled) => {
    adForm.classList.toggle('ad-form--disabled', isDisabled);
    formFieldsets.forEach((item) => item.disabled = isDisabled);
};

export const disableMapFilters = (isDisabled) => {
    mapFilter.classList.toggle('map__filters--disabled', isDisabled);
    mapFilterSelects.forEach((item) => item.disabled = isDisabled);
    mapFilterFieldsets.forEach((item) => item.disabled = isDisabled);
};
