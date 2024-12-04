// product, buyer, message, response, timestamps
import { Schema, model } from "mongoose";

const enquirySchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }, 
    buyer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    message: String, 
    response: String,
    status: {
        type: String,
        default: 'open' // 'mark-inappropriate', 'closed'
    }
}, { timestamps: true }); 

const Enquiry = model('Enquiry', enquirySchema);

export default Enquiry; 
