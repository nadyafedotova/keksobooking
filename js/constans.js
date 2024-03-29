export const countOffers = 10;
export const titles = [
    'Здам квартиру',
    'Здам будинок',
    'Здам сарай',
    'Здам лофт',
    'Здам cтудію',
    'Здам гараж',
];

export const prices = {
    min:1000,
    max:5000,
};

export const rooms = {
    min:1,
    max:5,
};

export const guests = {
    min:1,
    max:10,
};

export const checkTimes = [
    '12:00',
    '13:00',
    '14:00',
];

export const features = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner',
];

export const types = {
    flat:'Квартира',
    bungalow:'Бунгало',
    house:'Будинок',
    palace:'Палац'
}

export const descriptions = [
    'Відстань від готелю до пляжу становить 1,9 км, а до залізничного вокзалу- 6,6 км. Відстань до міжнародного аеропорту становить 6 км.',
    'Центр культури і мистецтва знаходиться в 1,9 км від апартаментів. Відстань до міжнародного аеропорту 16 км.',
    'Парам особливо подобається розташування — вони оцінили проживання в цьому районі для поїздки вдвоє на 8,5.',
    'Готель розташований сімейними номерами.',
    'Найпопулярнішими точками інтересу поряд з ним, включають Сеіганджі храм, Шосен-джи і Шибуя Kuritsu Honcho Park. ',
    'Рядом з готелем знаходяться парк, музей народної творчості.',
];

export const photos = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

export const startLocation = {
    x:[35.65000, 35.70000],
    y:[139.70000, 139.80000],
};

export const digits = 5;

export const typePrice = {
    bungalow:0,
    flat:1000,
    house:5000,
    palace:10000
};

export const mainLocation = {
    lat:35.675178,
    lng:139.748876,
};

export const mapScaling = 11;

export const roomsGuests = {
    '1':['1'],
    '2':['2', '1'],
    '3':['3', '2', '1'],
    '100':['0'],
};

export const urls = {
    get:'http://localhost:3000/offers',
    post:'http://localhost:3000/offer',
};

export const messages = {
    getDataErr:'Не вдалося отримати дані з серверу',
    findDataErr:'Не вдалося знайти відповідне оголошення',
};

export const zero = 0;

export const timeOutDelay = 500;

export const priceRanges = {
    any:{
        minPrice:0,
        maxPrice:10000,
    },
    middle:{
        minPrice:1001,
        maxPrice:5000,
    },
    low:{
        minPrice:0,
        maxPrice:1000,
    },
    high:{
        minPrice:5001,
        maxPrice:10000,
    },
};

export const defaultValue = 'any';

export const defaultAvatar = 'img/muffin-grey.svg';
