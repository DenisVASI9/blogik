import { diskStorage } from "multer";
import { extname } from "path";

export const multerOptions = {
  storage: diskStorage({
    destination: process.env.FILE_STORE,
    filename: (req, file, callback) => {
      const name = file.originalname.split('.')[0];
      const fileExtName = extname(file.originalname);
      const randomName = Array(4)
        .fill(null)
        .map(() => Math.round(Math.random() * 16).toString(16))
        .join('');
      callback(null, `${name}-${randomName}${fileExtName}`);
    },
  }),
  fileFilter: (req, file, callback) => {
    if (!(file.mimetype.indexOf('markdown') + 1)) {
      return callback(new Error('Only markdown files are allowed!'), false);
    }
    callback(null, true);
  },
};