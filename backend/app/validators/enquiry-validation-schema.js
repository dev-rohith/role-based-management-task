const enquiryValidationSchema = {
    product: {
        in: ['body'], 
        exists: {
            errorMessage: 'product field is required'
        },
        notEmpty: { 
            errorMessage: 'product cannot be empty'
        },
        isMongoId: {
            errorMessage: 'product should be a valid mongodb id'
        },
        trim: true,
    }
}

export default enquiryValidationSchema; 