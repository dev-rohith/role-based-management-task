// name, category, description, price, isVerfied - default false
import { Schema, model } from 'mongoose';
const productSchema = new Schema({
    name: String, 
    description: String,
    price: Number, 
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }, 
    isVerified: {
        type: Boolean,
        default: false 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true});

const Product = model('Product', productSchema); 
export default Product; 