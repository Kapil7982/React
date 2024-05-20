const axios = require('axios');
const db = require('../models/db');
const { compressImage } = require('../utils/imageUtils');

exports.processImages = async (productId, imageUrls) => {
    try {
        const compressedImages = await Promise.all(imageUrls.map(async (url) => {
            const imageBuffer = await axios.get(url, { responseType: 'arraybuffer' });
            const compressedImagePath = await compressImage(imageBuffer.data);
            return compressedImagePath;
        }));
        
        await db.promise().query(
            'UPDATE products SET compressed_product_images = ? WHERE id = ?',
            [JSON.stringify(compressedImages), productId]
        );
    } catch (err) {
        console.error('Error processing images:', err);
    }
};
