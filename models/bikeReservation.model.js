const mongoose = require('mongoose');

const bike_reserve_schema = new mongoose.Schema({
    reservation_number: {
        type: String,
        default: makeResID(5)
    },
    name:{
        type:String,
        required:true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    bike_id:  {
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    timeofuse:{
        type: String,
        required: true
    },
    paymentTotal: {
        type: String,
        required: true
    },
    reservation_date:{
        type:Date,
        default:Date.now
    }
})

const  bike_reserve = mongoose.model('bike_reserve', bike_reserve_schema);
module.exports = bike_reserve;


function makeResID(length) {
    let result = '';
    // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const characters = '0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return 'RESID-' + result;
}