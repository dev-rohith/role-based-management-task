import Product from "../models/product-model.js";
import {validationResult} from 'express-validator';
import _ from 'lodash'; 
const productsCltr = {}; 

productsCltr.list = async (req, res) => {
    try {
        const products = await Product.find({ isVerified: true }); 
        res.json(products)
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'Something went wrong!!!'})
    }
}

productsCltr.myProducts = async (req, res) => {
    try {
        const products = await Product.find({ user: req.currentUser.userId}); 
        res.json(products)
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'Something went wrong!!!'})
    }
}

productsCltr.show = async (req,res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const id = req.params.id 
    try {
        const product = await Product.findOne({ isVerified: true, _id: id});
        if(!product) {
            return res.status(404).json({ error: 'record not found'})
        } 
        res.json(product)
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'something went wrong'})
    }
}

productsCltr.verify = async (req, res) => {
    const id = req.params.id 
    const body = req.body 
    try { 
        const product = await Product.findByIdAndUpdate(id, body, { new: true, runValidators: true })
        if(!product) {
            return res.status(404).json({ error: 'record not found'})
        } 
        return res.json(product)
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'something went wrong'})
    }
}

productsCltr.update = async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const id = req.params.id 
    try { 
       let product; 
       if(req.currentUser.role == 'admin') {
        const body = req.body 
        product = await Product.findByIdAndUpdate(id, body, { new: true, runValidators: true })
       } else {
        const body = _.pick(req.body, ['name', 'price', 'description', 'category']); 
        product = await Product.findOneAndUpdate({_id: id, user: req.currentUser.userId},body, { new: true, runValidators: true })
       }
        if(!product) {
            return res.status(404).json({ error: 'record not found'})
        } 
        return res.json(product);
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'something went wrong'})
    }
}

productsCltr.remove = async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const id = req.params.id 
    try { 
       let product; 
       if(req.currentUser.role == 'admin') {
        product = await Product.findByIdAndDelete(id); 
       } else {
        product = await Product.findOneAndDelete({_id: id, user: req.currentUser.userId}); 
       }
        if(!product) {
            return res.status(404).json({ error: 'record not found'})
        } 
        return res.json(product);
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'something went wrong'})
    }

}
/*
uid e            role
1   s1@gmail.com seller
2   s2@gmail.com seller 

products
pid name user
100 a    1
101 b    2
102 c    1

token - s2 - { userId: 2}
id - 100
Product.findByIdUpdate(100, { price: 1})
*/ 


productsCltr.create = async (req, res) => {
    const errors = validationResult(req) 
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    // prevent mass assignment
    // const { name, price, description, category } = req.body 
    const body = _.pick(req.body, ['name', 'price', 'description', 'category']); 
    try { 
        const product = new Product(body);
        product.user = req.currentUser.userId; 
        await product.save(); 
        res.status(201).json(product); 
    } catch(err) {
        console.log(err) 
        res.status(500).json({ error: 'Something went wrong!!!'})
    } 
};
export default productsCltr; 