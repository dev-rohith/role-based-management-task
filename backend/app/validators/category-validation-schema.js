import Category from "../models/category-model.js";
const categoryValidationSchema = {
    name: {
        in: ['body'], 
        exists: {
            errorMessage: 'name field is required'
        },
        notEmpty: { 
            errorMessage: 'name cannot be empty'
        },
        isLength: {
            options: { min: 3, max: 20},
            errorMessage: 'name should be between 3 to 20 characters long'
        }, 
        trim: true,
        custom: {
            options: async function(value){
                const category = await Category.findOne({ name: value });
                if(category) {
                    throw new Error("name is already used")
                } else {
                    return true 
                }
            }
        }
    }
}

export default categoryValidationSchema; 