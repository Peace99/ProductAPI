const mongoose = require('mongoose')


//the structure for the products
const productSchema = new mongoose.Schema({
// setting properties of our data
name: {
    type: String,
    required: [true, 'product name must be provided']
}, 
price: {
    type: Number,
    required: [true, 'product price must be provided']
},
featured: {
    type: Boolean, 
    default: false,
}, 
rating: {
    type: Number,
    default: 4.5,
}, 
createdAt: {
    type: Date, 
    default: Date.now(),
},
company: {
    type: String,
    enum: {
    values: ['ikea', 'liddy', 'caressa', 'marcos'],
    message: '{VALUE} is not supported'
    }
}
})

module.exports = mongoose.model('Product', productSchema)
