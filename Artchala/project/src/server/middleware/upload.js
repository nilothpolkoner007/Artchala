import multer from 'multer';
import sharp from 'sharp';

const storage = multer.memoryStorage();
export const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

export const optimizeImage = async (req, res, next) => {
  if (!req.file) return next();

  try {
    const optimized = await sharp(req.file.buffer)
      .resize(1200, 1200, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 80 }) 
      .toBuffer();

    req.file.buffer = optimized;
    next();
  } catch (error) {
    next(error);
  }
};