import { getRandomElement, getRandomFloat, getRandomNumber } from './utils.js';
import { checkTimes, countOffers, descriptions, digits, features, guests, photos, prices, rooms, startLocation, titles, types } from './constans.js'

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