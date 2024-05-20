const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

exports.compressImage = async (imageBuffer) => {
    const compressedImagePath = path.join(__dirname, '../../uploads', `${Date.now()}.jpg`);
    await sharp(imageBuffer)
        .resize(800)
        .jpeg({ quality: 80 })
        .toFile(compressedImagePath);
    return compressedImagePath;
};
