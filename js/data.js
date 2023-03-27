import { typePrice } from './constans.js';

export const createOffer = (data) => {
    const loc = data.address.split(',');
    return {
        author:{
            avatar:data.avatar,
        },
        offer:{
            title:data.title,
            address:data.address,
            price:data.price,
            type:typePrice[data.type],
            rooms:data.rooms,
            guests:data.capacity,
            checkin:data.timein,
            checkout:data.timeout,
            features:data.features,
            description:data.description,
            photos:data.photos,
            location:{ x:loc[0], y:loc[1] }
        }
    }
}
