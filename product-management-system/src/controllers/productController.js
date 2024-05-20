const db = require('../models/db');
const imageService = require('../services/imageService');

exports.createProduct = async (req, res) => {
    const { user_id, product_name, product_description, product_images, product_price } = req.body;
    
    try {
        const [result] = await db.promise().query(
            'INSERT INTO products (user_id, product_name, product_description, product_images, product_price) VALUES (?, ?, ?, ?, ?)',
            [user_id, product_name, product_description, JSON.stringify(product_images), product_price]
        );
        
        const productId = result.insertId;
        
        imageService.processImages(productId, product_images);

        res.status(201).json({ message: 'Product created', productId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
