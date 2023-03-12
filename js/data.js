import { getRandomElement, getRandomFloat, getRandomNumber } from './utils.js';

const countOffers = 10;
const titles = [
    'Здам квартиру',
    'Здам будинок',
    'Здам сарай',
    'Здам лофт',
    'Здам Студію',
    'Здам гараж',
];

const prices = {
    min:1000,
    max:5000,
};

const rooms = {
    min:1,
    max:5,
};

const guests = {
    min:1,
    max:10,
};

const checkTimes = [
    '12:00',
    '13:00',
    '14:00',
];

const features = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
];

const types = [
    'palace',
    'flat',
    'house',
    'bungalow'
];

const descriptions = [
    'Відстань від готелю до пляжу становить 1,9 км, а до залізничного вокзалу- 6,6 км. Відстань до міжнародного аеропорту становить 6 км.',
    'Центр культури і мистецтва знаходиться в 1,9 км від апартаментів. Відстань до міжнародного аеропорту 16 км.',
    'Парам особливо подобається розташування — вони оцінили проживання в цьому районі для поїздки вдвоє на 8,5.',
    'Готель розташований сімейними номерами.',
    'Найпопулярнішими точками інтересу поряд з ним, включають Сеіганджі храм, Шосен-джи і Шибуя Kuritsu Honcho Park. ',
    'Рядом з готелем знаходяться парк, музей народного творчості.',
];

const photos = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const startLocation = {
    x:[35.65000, 35.70000],
    y:[139.70000, 139.80000],
};

const digits = 5;

const locations = () => {
    return {
        x:getRandomFloat(...startLocation.x, digits),
        y:getRandomFloat(...startLocation.y, digits),
    }
}

const createOffer = () => {
    const location = locations();
    return {
        author:{
            avatar:`img/avatars/user0${getRandomNumber(1, 8)}.png`,
        },
        offer:{
            title:getRandomElement(titles),
            address:location,
            price:getRandomNumber(prices.min, prices.max),
            type:getRandomElement(types),
            rooms:getRandomNumber(rooms.min, rooms.max),
            guests:getRandomNumber(guests.min, guests.max),
            checkin:getRandomElement(checkTimes),
            checkout:getRandomElement(checkTimes),
            features:getRandomElement(features),
            description:getRandomElement(descriptions),
            photos:getRandomElement(photos),
            location:location,
        }
    }
}

export const similarOffers = new Array(countOffers).fill(null).map(() => createOffer());