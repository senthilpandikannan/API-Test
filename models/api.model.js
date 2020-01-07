const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    id: {type: Number, required: true, max: 100},
    type: {type: String, required: true},
    userId: {type: Number, required: true},
    userName: {type: String, required: true},
    symbol: {type: String, required: true},
    shares: {type: Number, required: true},
    price: {type: Number, required: true}
   // timestamp: {type: Date, required: true}
});


// Export the model
//module.exports = mongoose.model('Product', ProductSchema);
let product = mongoose.model('trades', ProductSchema);
module.exports = {
    product: product
};