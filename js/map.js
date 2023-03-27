import { getPopup } from './popup.js';
import { disableForm, disableMapFilters } from './form_switcher.js';
import { digits, mapScaling, mainLocation, messages, countOffers, zero, timeOutDelay } from './constans.js';
import { data } from './api.js';
import { error } from './load_error.js';
import { checkAllFilters } from './filter.js';
import { debounce } from './utils.js';
import { filterForm } from './form.js';

const dataArr = [];
export const mainPinLocation = document.querySelector('#address');

const mainPinIcon = L.icon({
    iconUrl:'./img/main-pin.svg',
    iconSize:[52, 52],
    iconAnchor:[26, 52],
});

const similarPinIcon = L.icon({
    iconUrl:'./img/pin.svg',
    iconSize:[40, 40],
    iconAnchor:[20, 40],
});

export const getLocationToString = (obj, number) => {
    let { lat, lng } = obj;
    lat = +(lat.toFixed(number));
    lng = +(lng.toFixed(number));
    return `${lat}, ${lng}`;
};

const map = L.map('map-canvas').on('load', () => disableForm(false)).setView(mainLocation, mapScaling);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
).addTo(map);

const mainPinMarker = L.marker(
    mainLocation,
    {
        draggable:true,
        icon:mainPinIcon,
    },
);

mainPinMarker.addTo(map);
mainPinLocation.value = getLocationToString(mainPinMarker.getLatLng(), digits);

mainPinMarker.on('moveend', (evt) => mainPinLocation.value = getLocationToString(evt.target.getLatLng(), digits));

const markerGroup = L.layerGroup().addTo(map);

export const createMarker = (ad) => {
    const marker = L.marker(
        {
            lat:ad.offer.location.x,
            lng:ad.offer.location.y,
        },
        { icon:similarPinIcon }
    );
    marker
        .addTo(markerGroup)
        .bindPopup(getPopup(ad));
};

export const resetMainPinMarker = () => {
    mainPinMarker.setLatLng(mainLocation);
    map.setView(mainLocation, mapScaling);
    map.closePopup();
};

(async () => {
    const fetchData = await data(() => error(`${messages.getDataErr}`));
    dataArr.push(...fetchData);
    dataArr.slice(zero, countOffers).forEach((ad) => {
        createMarker(ad);
        disableMapFilters(false);
    });
})();

export const filterAd = () => {
    markerGroup.clearLayers();
    const filterAds = dataArr.filter((ad) => checkAllFilters(ad));
    filterAds.slice(zero, countOffers).forEach((ad) => createMarker(ad));
    if (filterAds.length <= 0) error(`${messages.findDataErr}`);
};

filterForm.addEventListener('change', debounce(filterAd, timeOutDelay));
