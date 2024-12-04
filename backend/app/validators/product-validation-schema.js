// name, category, description, price
const productValidationSchema = {
    name: {
        in: ['body'], 
        exists: {
            errorMessage: 'name field is required'
        },
        notEmpty: { 
            errorMessage: 'name cannot be empty'
        },
        trim: true,
    },
    description: {
        in: ['body'], 
        exists: {
            errorMessage: 'description field is required'
        },
        notEmpty: { 
            errorMessage: 'description cannot be empty'
        },
        trim: true,
    },
    category: {
        in: ['body'], 
        exists: {
            errorMessage: 'category field is required'
        },
        notEmpty: { 
            errorMessage: 'category cannot be empty'
        },
        isMongoId: {
            errorMessage: 'product should be a valid mongodb id'
        },
        trim: true,
    },
    price: {
        in: ['body'], 
        exists: {
            errorMessage: 'price field is required'
        },
        notEmpty: { 
            errorMessage: 'price cannot be empty'
        },
        isNumeric: {
            options: { min: 1 },
            errorMessage: 'price should be a number of minimum 1'
        },
        trim: true,
    }
}

export default productValidationSchema; 